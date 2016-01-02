import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'connectPeerServer',
            'connectPeer',
            'updateUrl'
        );
    }
}

export default alt.createActions(HomeActions);