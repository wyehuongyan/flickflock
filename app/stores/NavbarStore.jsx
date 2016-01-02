import alt from '../alt';
import NavbarActions from '../actions/NavbarActions.jsx';

class NavbarStore {
    constructor() {
        // binds actions to corresponding store handlers
        this.bindActions(NavbarActions);

        // define Navbar state
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    onFindCharacterSuccess(payload) {
        payload.history.pushState(null, '/characters/' + payload.characterId);
    }

    onFindCharacterFail(payload) {
        // shake animation
        payload.searchForm.classList.add('shake');
        setTimeout(() => {
            payload.searchForm.classList.remove('shake');
        }, 1000);
    }

    onUpdateOnlineUsers(data) {
        this.onlineUsers = data.onlineUsers;
    }

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; // fadeIn or fadeOut
    }

    onUpdateSearchQuery(event) {
        this.searchQuery = event.target.value;
    }

    onGetCharacterCountSuccess(data) {
        this.totalCharacters = data.count;
    }

    onGetCharacterCountFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(NavbarStore);