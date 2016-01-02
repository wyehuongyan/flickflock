import alt from '../alt';
import ChatboxActions from '../actions/ChatboxActions.jsx';
import {isEmpty} from 'underscore';

class ChatboxStore {
    constructor() {
        this.bindActions(ChatboxActions); // binds actions to corresponding store handlers
        this.chatMessages = [];
        this.chatMessage = '';
        this.conn = {};
    }

    onHandleConnections(payload) {
        // Handle event: remote peer receives connection and data
        payload.peer.on('connection', (conn) => {
            /*
            // listeners for chat messages and video events
            conn.on('data', (dataObject) => {
                console.log("AAAAAAA");

                if(dataObject.type == 'chatMessage') {
                    this.chatMessages.push(dataObject);

                    this.setState({
                        chatMessages: this.chatMessages,
                    });
                } else {
                    console.log(dataObject);
                }
            });
            */

            this.setState({
                conn: conn
            });
        });

        this.conn = payload.conn;

        // not receiving from others (already has conn)
        if(!isEmpty(this.conn)) {
            // listener for chat messages
            this.conn.on('data', (dataObject) => {
                if(dataObject.type == 'chatMessage') {
                    this.chatMessages.push(dataObject);

                    this.setState({
                        chatMessages: this.chatMessages,
                    });
                }
            });
        }
    }

    onAddMessage(payload) {
        // update input textfield
        this.chatMessage = '';

        // update chat messages array
        var chatObject = {
            'type': 'chatMessage',
            'peerId': payload.myPeerId,
            'body': payload.chatMessage
        };

        this.chatMessages.push(chatObject);

        // send to connected peer
        if(!isEmpty(this.conn)) {
            this.conn.send(chatObject);
        }
    }

    onUpdateChatMessage(event) {
        this.chatMessage = event.target.value;
    }
}

export default alt.createStore(ChatboxStore);