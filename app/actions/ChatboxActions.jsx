import alt from '../alt';

class ChatboxActions {
    constructor() {
        this.generateActions(
            'handleConnections',
            'addMessage',
            'updateChatMessage'
        )
    }
}

export default alt.createActions(ChatboxActions);