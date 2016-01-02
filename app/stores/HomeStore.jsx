import alt from '../alt';
import HomeActions from '../actions/HomeActions.jsx';

class HomeStore {
    constructor() {
        // binds actions to corresponding store handlers
        this.bindActions(HomeActions);

        // define Home state
        this.socket = {};
        this.peer = {};
        this.conn = {};
        this.player = {};
        this.theirVideoSrc = '';
        this.myVideoSrc = '';
        this.url = '';
        this.id = this.url.split("?v=").pop();
        this.shareUrl = '';

        this.readyToPlay = false
    }

    onConnectPeerServer(payload) {
        // establish a new peer connection
        payload.peer = new Peer({
            host: location.hostname,
            port: location.port || (location.protocol === 'https:' ? 443 : 80),
            path: '/peerjs'
        });

        payload.peer.on('open', (userId) => {
            console.log("userId: " +userId);

            if(!payload.connectPeerId) {
                let shareUrl = location.protocol + "//" + location.hostname + "/" +userId;
                //prompt("Share this URL with your friend!", shareUrl);

                console.log(shareUrl);
            }
        });

        // Handle event: remote peer receives a call
        payload.peer.on('call', (incomingCall) => {
            window.currentCall = incomingCall;
            incomingCall.answer(window.localStream);
            incomingCall.on('stream', (remoteStream) => {
                window.remoteStream = remoteStream;
                payload.theirVideo.src = URL.createObjectURL(remoteStream);
            });
        });

        // Media stream initialization
        navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia );

        // get audio/video
        navigator.getUserMedia({
                audio:true,
                video: true
            },
            (stream) => {
                //display video only
                payload.myVideo.src = URL.createObjectURL(stream);
                window.localStream = stream;

                // connect to peer
                if(payload.connectPeerId && payload.videoId) {
                    console.log(payload.videoId);

                    this.onConnectPeer({
                        'peerId': payload.connectPeerId,
                        'theirVideo': payload.theirVideo,
                        'videoId': payload.videoId
                    });
                }
            },
            (error) => {
                toastr.error(error);
            }
        );

        // when receiving a connection
        payload.peer.on('connection', (conn) => {
            console.log("received connection from peer");

            this.setState({
                conn: conn,
                readyToPlay: true
            });
        });

        let socket = io.connect();

        socket.on('onlineUsers', (data) => {
            console.log(data);
        });

        this.socket = socket;
        this.peer = payload.peer;
        this.theirVideoSrc = payload.theirVideo.src;
        this.myVideoSrc = payload.myVideo.src;
    }

    onConnectPeer(payload) {
        var outgoingCall = this.peer.call(payload.peerId, window.localStream);
        window.currentCall = outgoingCall;

        // video from remote
        outgoingCall.on('stream', (remoteStream) => {
            window.remoteStream = remoteStream;
            payload.theirVideo.src = URL.createObjectURL(remoteStream);
        });

        // establish data connection for chat
        var conn = this.peer.connect(payload.peerId);

        conn.on('open', () => {
            this.setState({
                conn: conn,
                url: 'https://www.youtube.com/watch?v=' + payload.videoId,
                id: payload.videoId,
                theirVideoSrc: payload.theirVideo.src,
                readyToPlay: true
            });
        });
    }

    onUpdateUrl(event) {
        this.url= event.target.value;
        this.id = this.url.split("?v=").pop();
        this.shareUrl = location.protocol + "//" + location.hostname + "/" + this.peer.id + "/" + this.id;

        console.log(this.url);
        console.log(this.shareUrl);
    }
}

export default alt.createStore(HomeStore);