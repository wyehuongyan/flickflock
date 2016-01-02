import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore.jsx';
import HomeActions from '../actions/HomeActions.jsx';
import {first, without, findWhere} from 'underscore';
import YouTube from 'lapanoid-react-youtube';
import Chatbox from './Chatbox.jsx';
import {isEmpty} from 'underscore';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);

        HomeActions.connectPeerServer({
            'peer': this.state.peer,
            'theirVideo': this.refs.theirVideo,
            'myVideo': this.refs.myVideo,
            'connectPeerId': this.props.params.peerid,
            'videoId': this.props.params.videoid
        });

        /*
        // socket event listeners
        socket.on('onlineUsers', (data) => {
            console.log(data);
        });

        socket.on('videoStateChanged', function(data){
            console.log(data);
        });
        */
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    connectPeer(peerId) {
        HomeActions.connectPeer({
            'peerId': peerId,
            'theirVideo': this.refs.theirVideo
        });
    }

    // video events
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        //event.target.stopVideo();

        this.listenVideoEvents({
            player: event.target
        });
    }

    listenVideoEvents(payload) {
        this.player = payload.player;

        // listener for video events
        this.state.conn.on('data', (dataObject) => {
            if(dataObject.type == 'videoEvent') {
                let event = dataObject.event;

                switch(event) {
                    case 'videoPlay':

                        // if player started from a paused state
                        if(this.player.getPlayerState() == 2) {
                            // seek to the synchronized position before playing
                            this.player.seekTo(dataObject.currentTime);
                        } else if(this.player.getPlayerState() == 5) {
                            this.player.seekTo(dataObject.currentTime + 0.5);
                        }

                        this.player.playVideo();

                        break;

                    case 'videoPause':

                        this.player.pauseVideo();

                        this.player.seekTo(dataObject.currentTime); // synchronize players

                        break;
                }
            }
        });
    }

    videoOnPlay(event) {
        //console.log("Video Played");

        //this.state.socket.emit('videoPlay', "The video is now playing.");
        if(!isEmpty(this.state.conn)) {
            this.state.conn.send({
                'type': 'videoEvent',
                'event': 'videoPlay',
                'currentTime': event.target.getCurrentTime()
            });
        }
    }

    videoOnPause(event) {
        //console.log("Video Paused");

        //this.state.socket.emit('videoPause', "The video is now paused.");
        if(!isEmpty(this.state.conn)) {
            this.state.conn.send({
                'type': 'videoEvent',
                'event': 'videoPause',
                'currentTime': event.target.getCurrentTime()
            });
        }
    }

    videoOnEnd(event) {
        //console.log("Video Ended");

        //this.state.socket.emit('videoEnd', "The video has ended.");
    }

    videoOnError(event) {
        //console.log("Video Error");

        //this.state.socket.emit('videoError', "The video has encountered an error.");
    }

    videoOnStateChange(event) {
        //console.log("Video State Changed");

        //this.state.socket.emit('videoStateChanged', event.target.getCurrentTime());
    }

    renderVideo() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <div className="embed-responsive embed-responsive-16by9">
                <YouTube
                    url={this.state.url}
                    id={this.state.id}
                    className="embed-responsive-item"
                    opts={opts}
                    onReady={this.videoOnReady.bind(this)}
                    onPlay={this.videoOnPlay.bind(this)}
                    onPause={this.videoOnPause.bind(this)}
                    onEnd={this.videoOnEnd.bind(this)}
                    onError={this.videoOnError.bind(this)}
                    onStateChange={this.videoOnStateChange.bind(this)}
                />
            </div>
        );
    }

    renderForm() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <div className='row'>
                    <div className='col-xs-8 col-xs-offset-2'>
                        <div className="well video-form form">
                            <div className="form-group">
                                <label htmlFor="video-url">Paste Youtube Link</label>
                                <input type="text" ref="messageTextField" className="form-control input-lg" id="video-url" placeholder="(e.g. https://www.youtube.com/watch?v=IJNR2EpS0jw)" value={this.state.url} onChange={HomeActions.updateUrl} />
                            </div>

                            {this.state.url != '' ? this.renderSharingForm() : null}

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSharingForm() {
        return (
            <div className="form-group">
                <label htmlFor="share-url">Share this with your friend</label>
                <input type="text" className="form-control input-lg" id="share-url" value={this.state.shareUrl} />
            </div>
        );
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xs-2">
                        <div className="embed-responsive embed-responsive-4by4">
                            <video ref='theirVideo' src={this.state.theirVideoSrc} className="embed-responsive-item video-avatar-friend img-circle" poster="/img/default_user_image.png" autoPlay webkit-playsinline></video>
                        </div>
                    </div>

                    <div className="col-xs-8 video-frame">
                        {this.state.readyToPlay ? this.renderVideo() : this.renderForm()}
                    </div>

                    <div className="col-xs-2">
                        <div className="embed-responsive embed-responsive-4by4">
                            <video ref='myVideo' src={this.state.myVideoSrc} className="embed-responsive-item video-avatar img-circle" poster="/img/default_user_image.png" autoPlay webkit-playsinline muted></video>
                        </div>
                    </div>
                </div>
                <div className='row well'>
                    <div className="control-panel">
                        <div className="col-xs-12 chat-box">
                            <Chatbox peer={this.state.peer} conn={this.state.conn} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;