import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions.jsx';

class CharacterListStore {
    constructor() {
        this.bindActions(CharacterListActions);

        // define CharacterList state
        this.characters = [];
    }

    onGetCharactersSuccess(data) {
        this.characters = data;
    }

    onGetCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(CharacterListStore);