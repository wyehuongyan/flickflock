import React from 'react';
import {Route} from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import AddCharacter from './components/AddCharacter.jsx';
import Character from './components/Character.jsx';
import CharacterList from './components/CharacterList.jsx';
import Stats from './components/Stats.jsx';

export default (
    <Route component={App}>
        <Route path='/' component={Home}>
            <Route path=':peerid' component={Home}>
                <Route path=':videoid' component={Home} />
            </Route>
        </Route>
    </Route>
);