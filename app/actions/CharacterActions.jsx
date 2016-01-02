import alt from '../alt';

class CharacterActions {
    constructor() {
        this.generateActions(
            'reportSuccess',
            'reportFail',
            'getCharacterSuccess',
            'getCharacterFail'
        );
    }

    getCharacter(characterId) {
        $.ajax({
            url: '/api/characters/' + characterId
        }).done((data) => {
            // action automatically dispatches to dispatcher
            this.actions.getCharacterSuccess(data);
        }).fail((jqXhr) => {
            // action automatically dispatches to dispatcher
            this.actions.getCharacterFail(jqXhr);
        });
    }

    report(characterId) {
        $.ajax({
            type: 'POST',
            url: '/api/report',
            data: { characterId: characterId }
        }).done(() => {
            // action automatically dispatches to dispatcher
            this.actions.reportSuccess();
        }).fail((jqXhr) => {
            // action automatically dispatches to dispatcher
            this.actions.reportFail(jqXhr);
        });
    }
}

export default alt.createActions(CharacterActions);