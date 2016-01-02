import alt from '../alt';

class FooterActions {
    /*
     getTopCharactersSuccess(payload) {
        this.dispatch(payload);
     }

     getTopCharactersFail(payload) {
        this.dispatch(payload);
     }

     // Equivalent to this...
     this.generateActions(
        'getTopCharactersSuccess',
        'getTopCharactersFail'
     );
    */

    constructor() {
        this.generateActions(
            'getTopCharactersSuccess',
            'getTopCharactersFail'
        );
    }

    getTopCharacters() {
        $.ajax({ url: '/api/characters/top' })
            .done((data) => { // short hand for function (curly brace means no return)
                // action automatically dispatches to dispatcher
                this.actions.getTopCharactersSuccess(data)
            })
            .fail((jqXhr) => {
                // action automatically dispatches to dispatcher
                this.actions.getTopCharactersFail(jqXhr)
            });
    }
}

export default alt.createActions(FooterActions);