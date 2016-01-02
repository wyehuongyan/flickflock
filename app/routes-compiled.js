'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home.jsx');

var _Home2 = _interopRequireDefault(_Home);

var _AddCharacter = require('./components/AddCharacter.jsx');

var _AddCharacter2 = _interopRequireDefault(_AddCharacter);

var _Character = require('./components/Character.jsx');

var _Character2 = _interopRequireDefault(_Character);

var _CharacterList = require('./components/CharacterList.jsx');

var _CharacterList2 = _interopRequireDefault(_CharacterList);

var _Stats = require('./components/Stats.jsx');

var _Stats2 = _interopRequireDefault(_Stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddCharacter2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/characters/:id', component: _Character2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/shame', component: _CharacterList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/stats', component: _Stats2.default }),
    _react2.default.createElement(
        _reactRouter.Route,
        { path: ':category', component: _CharacterList2.default },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: ':race', component: _CharacterList2.default },
            _react2.default.createElement(_reactRouter.Route, { path: ':bloodline', component: _CharacterList2.default })
        )
    )
);

//# sourceMappingURL=routes-compiled.js.map