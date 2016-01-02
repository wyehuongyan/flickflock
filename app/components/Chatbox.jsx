import React from 'react';
import ChatboxStore from '../stores/ChatboxStore.jsx';
import ChatboxActions from '../actions/ChatboxActions.jsx';

class Chatbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = ChatboxStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ChatboxStore.listen(this.onChange); // listen to the store

        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillReceiveProps(nextProps) {
        ChatboxActions.handleConnections({
            'conn': nextProps.conn,
            'peer': nextProps.peer
        });
    }

    onChange(state) {
        this.setState(state);

        this.scrollToBottom();
    }

    scrollToBottom() {
        this.refs.chatHistory.scrollTop = this.refs.chatHistory.scrollHeight;
    }

    addMessage() {
        // action to store
        ChatboxActions.addMessage({
            'conn': this.state.conn,
            'myPeerId': this.props.peer.id,
            'chatMessage': this.state.chatMessage,
        });
    }

    addMessageEnter(event) {
        // enter was pressed
        if (event.keyCode === 13) {
            this.addMessage();
        }
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString().
        replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    }

    renderChatMessages() {
        return this.state.chatMessages.map((chatMessage, index) => {

            if(chatMessage.peerId != this.props.peer.id) {
                return (
                    this.renderFriendChatMessages(chatMessage, index)
                );
            } else {
                return (
                    this.renderMyChatMessages(chatMessage, index)
                );
            }
        });
    }

    renderMyChatMessages(chatMessage, index) {
        return (
            <li className="clearfix" key={index}>
                <div className="message-data align-right">
                    <span className="message-data-time">{this.getCurrentTime()}</span> &nbsp; &nbsp;
                    <span className="message-data-name">You</span> <i className="fa fa-circle me"></i>

                </div>
                <div className="message my-message float-right">
                    {chatMessage.body}
                </div>
            </li>
        );
    }

    renderFriendChatMessages(chatMessage, index) {
        return (
            <li key={index}>
                <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Friend</span>
                    <span className="message-data-time">{this.getCurrentTime()}</span>
                </div>
                <div className="message other-message">
                    {chatMessage.body}
                </div>
            </li>
        );
    }

    render() {
        return (
            <div className="chat">
                <div className="input-group col-xs-8 col-xs-offset-2">
                    <input type="text" ref="messageTextField" className="form-control input-lg" placeholder="Start chatting!" value={this.state.chatMessage} onChange={ChatboxActions.updateChatMessage} onKeyUp={this.addMessageEnter.bind(this)} />
                    <span className="input-group-btn">
                        <button
                            onClick={this.addMessage.bind(this)}
                            className="btn btn-default btn-lg"
                            type="button">
                            Send
                        </button>
                    </span>
                </div>
                <div ref="chatHistory" className="chat-history">
                    <ul ref="chatHistoryList">
                        {this.renderChatMessages()}
                    </ul>

                </div>
            </div>
        )
    }
}

export default Chatbox;