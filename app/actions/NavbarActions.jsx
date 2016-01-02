import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
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
            'updateOnlineUsers',    // sets online users count on socket.io event update
            'updateAjaxAnimation',  // adds "fadeIn" or "fadeOut" css class to the loading indicator
            'updateSearchQuery',    // update search query value on keypress
            'getCharacterCountSuccess', // returns total number of characters
            'getCharacterCountFail',    // returns jQUery jqXhr object
            'findCharacterSuccess',
            'findCharacterFail'
        );
    }

    // finds a character by name
    findCharacter(payload) {
        $.ajax({
            url: '/api/characters/search',
            data: { name: payload.searchQuery }
        })
            .done((data) => { // shorthand for function (curly brace means no return)
                assign(payload, data); // assign data to payload
                // action automatically dispatches to dispatcher
                this.actions.findCharacterSuccess(payload);
            })
            .fail((jqXhr) => {
                // action automatically dispatches to dispatcher
                this.actions.getCharacterCountFail(jqXhr);
            });
    }

    // fetch total number of characters from the server
    getCharacterCount() {
        $.ajax({ url: '/api/characters/count' })
            .done((data) => {
                // action automatically dispatches to dispatcher
                this.actions.getCharacterCountSuccess(data);
            })
            .fail((jqXhr) => {
                // action automatically dispatches to dispatcher
                this.actions.getCharacterCountFail(jqXhr);
            });
    }
}

export default alt.createActions(NavbarActions);