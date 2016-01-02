import alt from '../alt';
import FooterActions from '../actions/FooterActions.jsx';

class FooterStore {
    constructor() {
        this.bindActions(FooterActions); // binds actions to corresponding store handlers
        this.characters = [];
    }

    onGetTopCharactersSuccess(data) {
        this.characters = data.slice(0, 5);
    }

    onGetTopCharactersFail(jqXhr) {
        // handle multiple response formats, failback to HTTP status code number
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(FooterStore);