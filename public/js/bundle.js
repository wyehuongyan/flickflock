(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatboxActions = function ChatboxActions() {
    _classCallCheck(this, ChatboxActions);

    this.generateActions('handleConnections', 'addMessage', 'updateChatMessage');
};

exports.default = _alt2.default.createActions(ChatboxActions);

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions('connectPeerServer', 'connectPeer', 'updateUrl');
};

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return App;
})(_react2.default.Component);

exports.default = App;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatboxStore = require('../stores/ChatboxStore.jsx');

var _ChatboxStore2 = _interopRequireDefault(_ChatboxStore);

var _ChatboxActions = require('../actions/ChatboxActions.jsx');

var _ChatboxActions2 = _interopRequireDefault(_ChatboxActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chatbox = (function (_React$Component) {
    _inherits(Chatbox, _React$Component);

    function Chatbox(props) {
        _classCallCheck(this, Chatbox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chatbox).call(this, props));

        _this.state = _ChatboxStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Chatbox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ChatboxStore2.default.listen(this.onChange); // listen to the store

            this.scrollToBottom();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.scrollToBottom();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            _ChatboxActions2.default.handleConnections({
                'conn': nextProps.conn,
                'peer': nextProps.peer
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);

            this.scrollToBottom();
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            this.refs.chatHistory.scrollTop = this.refs.chatHistory.scrollHeight;
        }
    }, {
        key: 'addMessage',
        value: function addMessage() {
            // action to store
            _ChatboxActions2.default.addMessage({
                'conn': this.state.conn,
                'myPeerId': this.props.peer.id,
                'chatMessage': this.state.chatMessage
            });
        }
    }, {
        key: 'addMessageEnter',
        value: function addMessageEnter(event) {
            // enter was pressed
            if (event.keyCode === 13) {
                this.addMessage();
            }
        }
    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        }
    }, {
        key: 'renderChatMessages',
        value: function renderChatMessages() {
            var _this2 = this;

            return this.state.chatMessages.map(function (chatMessage, index) {

                if (chatMessage.peerId != _this2.props.peer.id) {
                    return _this2.renderFriendChatMessages(chatMessage, index);
                } else {
                    return _this2.renderMyChatMessages(chatMessage, index);
                }
            });
        }
    }, {
        key: 'renderMyChatMessages',
        value: function renderMyChatMessages(chatMessage, index) {
            return _react2.default.createElement(
                'li',
                { className: 'clearfix', key: index },
                _react2.default.createElement(
                    'div',
                    { className: 'message-data align-right' },
                    _react2.default.createElement(
                        'span',
                        { className: 'message-data-time' },
                        this.getCurrentTime()
                    ),
                    '    ',
                    _react2.default.createElement(
                        'span',
                        { className: 'message-data-name' },
                        'You'
                    ),
                    ' ',
                    _react2.default.createElement('i', { className: 'fa fa-circle me' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'message my-message float-right' },
                    chatMessage.body
                )
            );
        }
    }, {
        key: 'renderFriendChatMessages',
        value: function renderFriendChatMessages(chatMessage, index) {
            return _react2.default.createElement(
                'li',
                { key: index },
                _react2.default.createElement(
                    'div',
                    { className: 'message-data' },
                    _react2.default.createElement(
                        'span',
                        { className: 'message-data-name' },
                        _react2.default.createElement('i', { className: 'fa fa-circle online' }),
                        ' Friend'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'message-data-time' },
                        this.getCurrentTime()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'message other-message' },
                    chatMessage.body
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'chat' },
                _react2.default.createElement(
                    'div',
                    { className: 'input-group col-xs-8 col-xs-offset-2' },
                    _react2.default.createElement('input', { type: 'text', ref: 'messageTextField', className: 'form-control input-lg', placeholder: 'Start chatting!', value: this.state.chatMessage, onChange: _ChatboxActions2.default.updateChatMessage, onKeyUp: this.addMessageEnter.bind(this) }),
                    _react2.default.createElement(
                        'span',
                        { className: 'input-group-btn' },
                        _react2.default.createElement(
                            'button',
                            {
                                onClick: this.addMessage.bind(this),
                                className: 'btn btn-default btn-lg',
                                type: 'button' },
                            'Send'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { ref: 'chatHistory', className: 'chat-history' },
                    _react2.default.createElement(
                        'ul',
                        { ref: 'chatHistoryList' },
                        this.renderChatMessages()
                    )
                )
            );
        }
    }]);

    return Chatbox;
})(_react2.default.Component);

exports.default = Chatbox;

},{"../actions/ChatboxActions.jsx":1,"../stores/ChatboxStore.jsx":9,"react":"react"}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore.jsx');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions.jsx');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _underscore = require('underscore');

var _lapanoidReactYoutube = require('lapanoid-react-youtube');

var _lapanoidReactYoutube2 = _interopRequireDefault(_lapanoidReactYoutube);

var _Chatbox = require('./Chatbox.jsx');

var _Chatbox2 = _interopRequireDefault(_Chatbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

        _this.state = _HomeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _HomeStore2.default.listen(this.onChange);

            _HomeActions2.default.connectPeerServer({
                'peer': this.state.peer,
                'theirVideo': this.refs.theirVideo,
                'myVideo': this.refs.myVideo,
                'connectPeerId': this.props.params.peerid,
                'videoId': this.props.params.videoid
            });

            /*
            // socket event listeners
            socket.on('onlineUsers', (data) => {
                console.log(data);
            });
             socket.on('videoStateChanged', function(data){
                console.log(data);
            });
            */
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _HomeStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'connectPeer',
        value: function connectPeer(peerId) {
            _HomeActions2.default.connectPeer({
                'peerId': peerId,
                'theirVideo': this.refs.theirVideo
            });
        }

        // video events

    }, {
        key: 'videoOnReady',
        value: function videoOnReady(event) {
            // access to player in all event handlers via event.target
            //event.target.stopVideo();

            this.listenVideoEvents({
                player: event.target
            });
        }
    }, {
        key: 'listenVideoEvents',
        value: function listenVideoEvents(payload) {
            var _this2 = this;

            this.player = payload.player;

            // listener for video events
            this.state.conn.on('data', function (dataObject) {
                if (dataObject.type == 'videoEvent') {
                    var event = dataObject.event;

                    switch (event) {
                        case 'videoPlay':

                            // if player started from a paused state
                            if (_this2.player.getPlayerState() == 2) {
                                // seek to the synchronized position before playing
                                _this2.player.seekTo(dataObject.currentTime);
                            } else if (_this2.player.getPlayerState() == 5) {
                                _this2.player.seekTo(dataObject.currentTime + 0.5);
                            }

                            _this2.player.playVideo();

                            break;

                        case 'videoPause':

                            _this2.player.pauseVideo();

                            _this2.player.seekTo(dataObject.currentTime); // synchronize players

                            break;
                    }
                }
            });
        }
    }, {
        key: 'videoOnPlay',
        value: function videoOnPlay(event) {
            //console.log("Video Played");

            //this.state.socket.emit('videoPlay', "The video is now playing.");
            if (!(0, _underscore.isEmpty)(this.state.conn)) {
                this.state.conn.send({
                    'type': 'videoEvent',
                    'event': 'videoPlay',
                    'currentTime': event.target.getCurrentTime()
                });
            }
        }
    }, {
        key: 'videoOnPause',
        value: function videoOnPause(event) {
            //console.log("Video Paused");

            //this.state.socket.emit('videoPause', "The video is now paused.");
            if (!(0, _underscore.isEmpty)(this.state.conn)) {
                this.state.conn.send({
                    'type': 'videoEvent',
                    'event': 'videoPause',
                    'currentTime': event.target.getCurrentTime()
                });
            }
        }
    }, {
        key: 'videoOnEnd',
        value: function videoOnEnd(event) {
            //console.log("Video Ended");

            //this.state.socket.emit('videoEnd', "The video has ended.");
        }
    }, {
        key: 'videoOnError',
        value: function videoOnError(event) {
            //console.log("Video Error");

            //this.state.socket.emit('videoError', "The video has encountered an error.");
        }
    }, {
        key: 'videoOnStateChange',
        value: function videoOnStateChange(event) {
            //console.log("Video State Changed");

            //this.state.socket.emit('videoStateChanged', event.target.getCurrentTime());
        }
    }, {
        key: 'renderVideo',
        value: function renderVideo() {
            var opts = {
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };

            return _react2.default.createElement(
                'div',
                { className: 'embed-responsive embed-responsive-16by9' },
                _react2.default.createElement(_lapanoidReactYoutube2.default, {
                    url: this.state.url,
                    id: this.state.id,
                    className: 'embed-responsive-item',
                    opts: opts,
                    onReady: this.videoOnReady.bind(this),
                    onPlay: this.videoOnPlay.bind(this),
                    onPause: this.videoOnPause.bind(this),
                    onEnd: this.videoOnEnd.bind(this),
                    onError: this.videoOnError.bind(this),
                    onStateChange: this.videoOnStateChange.bind(this)
                })
            );
        }
    }, {
        key: 'renderBanner',
        value: function renderBanner() {
            return _react2.default.createElement(
                'div',
                { className: 'embed-responsive embed-responsive-16by9' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-10 col-xs-offset-1' },
                        _react2.default.createElement('img', { className: 'banner-title', src: '/img/flick_flock_web_banner_title.png' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-10 col-xs-offset-1' },
                        _react2.default.createElement('img', { className: 'banner', src: '/img/flick_flock_web_banner.png' })
                    )
                )
            );
        }
    }, {
        key: 'renderForm',
        value: function renderForm() {
            return _react2.default.createElement(
                'div',
                { className: 'col-xs-8 col-lg-offset-2' },
                _react2.default.createElement(
                    'div',
                    { className: 'video-form form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'video-url' },
                            'Paste Youtube Link'
                        ),
                        _react2.default.createElement('input', { type: 'text', ref: 'messageTextField', className: 'form-control input-lg', id: 'video-url', placeholder: '(e.g. https://www.youtube.com/watch?v=IJNR2EpS0jw)', value: this.state.url, onChange: _HomeActions2.default.updateUrl })
                    ),
                    this.state.url != '' ? this.renderSharingForm() : null
                )
            );
        }
    }, {
        key: 'renderSharingForm',
        value: function renderSharingForm() {
            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: 'share-url' },
                    'Share this with your friend'
                ),
                _react2.default.createElement('input', { type: 'text', className: 'form-control input-lg', id: 'share-url', value: this.state.shareUrl })
            );
        }
    }, {
        key: 'renderChat',
        value: function renderChat() {
            return _react2.default.createElement(
                'div',
                { className: 'control-panel' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 chat-box' },
                    _react2.default.createElement(_Chatbox2.default, { peer: this.state.peer, conn: this.state.conn })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-2' },
                        _react2.default.createElement(
                            'div',
                            { className: 'embed-responsive embed-responsive-4by4' },
                            _react2.default.createElement('video', { ref: 'theirVideo', src: this.state.theirVideoSrc, className: 'embed-responsive-item video-avatar-friend img-circle', poster: '/img/default_user_image.png', autoPlay: true, 'webkit-playsinline': true })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-8 video-frame' },
                        this.state.readyToPlay ? this.renderVideo() : this.renderBanner()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-2' },
                        _react2.default.createElement(
                            'div',
                            { className: 'embed-responsive embed-responsive-4by4' },
                            _react2.default.createElement('video', { ref: 'myVideo', src: this.state.myVideoSrc, className: 'embed-responsive-item video-avatar img-circle', poster: '/img/default_user_image.png', autoPlay: true, 'webkit-playsinline': true, muted: true })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row well' },
                    this.state.readyToPlay ? this.renderChat() : this.renderForm()
                )
            );
        }
    }]);

    return Home;
})(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions.jsx":2,"../stores/HomeStore.jsx":10,"./Chatbox.jsx":5,"lapanoid-react-youtube":29,"react":"react","react-router":"react-router","underscore":"underscore"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)(); /* Entry point for our React Application */

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":8,"history/lib/createBrowserHistory":20,"react":"react","react-dom":"react-dom","react-router":"react-router"}],8:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _Home2.default },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: ':peerid', component: _Home2.default },
            _react2.default.createElement(_reactRouter.Route, { path: ':videoid', component: _Home2.default })
        )
    )
);

},{"./components/App.jsx":4,"./components/Home.jsx":6,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ChatboxActions = require('../actions/ChatboxActions.jsx');

var _ChatboxActions2 = _interopRequireDefault(_ChatboxActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatboxStore = (function () {
    function ChatboxStore() {
        _classCallCheck(this, ChatboxStore);

        this.bindActions(_ChatboxActions2.default); // binds actions to corresponding store handlers
        this.chatMessages = [];
        this.chatMessage = '';
        this.conn = {};
    }

    _createClass(ChatboxStore, [{
        key: 'onHandleConnections',
        value: function onHandleConnections(payload) {
            var _this = this;

            // Handle event: remote peer receives connection and data
            payload.peer.on('connection', function (conn) {
                /*
                // listeners for chat messages and video events
                conn.on('data', (dataObject) => {
                    console.log("AAAAAAA");
                     if(dataObject.type == 'chatMessage') {
                        this.chatMessages.push(dataObject);
                         this.setState({
                            chatMessages: this.chatMessages,
                        });
                    } else {
                        console.log(dataObject);
                    }
                });
                */

                _this.setState({
                    conn: conn
                });
            });

            this.conn = payload.conn;

            // not receiving from others (already has conn)
            if (!(0, _underscore.isEmpty)(this.conn)) {
                // listener for chat messages
                this.conn.on('data', function (dataObject) {
                    if (dataObject.type == 'chatMessage') {
                        _this.chatMessages.push(dataObject);

                        _this.setState({
                            chatMessages: _this.chatMessages
                        });
                    }
                });
            }
        }
    }, {
        key: 'onAddMessage',
        value: function onAddMessage(payload) {
            // update input textfield
            this.chatMessage = '';

            // update chat messages array
            var chatObject = {
                'type': 'chatMessage',
                'peerId': payload.myPeerId,
                'body': payload.chatMessage
            };

            this.chatMessages.push(chatObject);

            // send to connected peer
            if (!(0, _underscore.isEmpty)(this.conn)) {
                this.conn.send(chatObject);
            }
        }
    }, {
        key: 'onUpdateChatMessage',
        value: function onUpdateChatMessage(event) {
            this.chatMessage = event.target.value;
        }
    }]);

    return ChatboxStore;
})();

exports.default = _alt2.default.createStore(ChatboxStore);

},{"../actions/ChatboxActions.jsx":1,"../alt":3,"underscore":"underscore"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions.jsx');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = (function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        // binds actions to corresponding store handlers
        this.bindActions(_HomeActions2.default);

        // define Home state
        this.socket = {};
        this.peer = {};
        this.conn = {};
        this.player = {};
        this.theirVideoSrc = '';
        this.myVideoSrc = '';
        this.url = '';
        this.id = this.url.split("?v=").pop();
        this.shareUrl = '';

        this.readyToPlay = false;
    }

    _createClass(HomeStore, [{
        key: 'onConnectPeerServer',
        value: function onConnectPeerServer(payload) {
            var _this = this;

            // establish a new peer connection
            payload.peer = new Peer({
                host: location.hostname,
                port: location.port || (location.protocol === 'https:' ? 443 : 80),
                path: '/peerjs'
            });

            payload.peer.on('open', function (userId) {
                console.log("userId: " + userId);

                if (!payload.connectPeerId) {
                    var shareUrl = location.protocol + "//" + location.hostname + "/" + userId;
                    //prompt("Share this URL with your friend!", shareUrl);

                    console.log(shareUrl);
                }
            });

            // Handle event: remote peer receives a call
            payload.peer.on('call', function (incomingCall) {
                window.currentCall = incomingCall;
                incomingCall.answer(window.localStream);
                incomingCall.on('stream', function (remoteStream) {
                    window.remoteStream = remoteStream;
                    payload.theirVideo.src = URL.createObjectURL(remoteStream);
                });
            });

            // Media stream initialization
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            // get audio/video
            navigator.getUserMedia({
                audio: true,
                video: true
            }, function (stream) {
                //display video only
                payload.myVideo.src = URL.createObjectURL(stream);
                window.localStream = stream;

                // connect to peer
                if (payload.connectPeerId && payload.videoId) {
                    console.log(payload.videoId);

                    _this.onConnectPeer({
                        'peerId': payload.connectPeerId,
                        'theirVideo': payload.theirVideo,
                        'videoId': payload.videoId
                    });
                }
            }, function (error) {
                toastr.error(error);
            });

            // when receiving a connection
            payload.peer.on('connection', function (conn) {
                console.log("received connection from peer");

                _this.setState({
                    conn: conn,
                    readyToPlay: true
                });
            });

            var socket = io.connect();

            socket.on('onlineUsers', function (data) {
                console.log(data);
            });

            this.socket = socket;
            this.peer = payload.peer;
            this.theirVideoSrc = payload.theirVideo.src;
            this.myVideoSrc = payload.myVideo.src;
        }
    }, {
        key: 'onConnectPeer',
        value: function onConnectPeer(payload) {
            var _this2 = this;

            var outgoingCall = this.peer.call(payload.peerId, window.localStream);
            window.currentCall = outgoingCall;

            // video from remote
            outgoingCall.on('stream', function (remoteStream) {
                window.remoteStream = remoteStream;
                payload.theirVideo.src = URL.createObjectURL(remoteStream);
            });

            // establish data connection for chat
            var conn = this.peer.connect(payload.peerId);

            conn.on('open', function () {
                _this2.setState({
                    conn: conn,
                    url: 'https://www.youtube.com/watch?v=' + payload.videoId,
                    id: payload.videoId,
                    theirVideoSrc: payload.theirVideo.src,
                    readyToPlay: true
                });
            });
        }
    }, {
        key: 'onUpdateUrl',
        value: function onUpdateUrl(event) {
            this.url = event.target.value;
            this.id = this.url.split("?v=").pop();
            this.shareUrl = location.protocol + "//" + location.hostname + "/" + this.peer.id + "/" + this.id;

            console.log(this.url);
            console.log(this.shareUrl);
        }
    }]);

    return HomeStore;
})();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions.jsx":2,"../alt":3}],11:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":12,"./lib/keys.js":13}],12:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],13:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],14:[function(require,module,exports){

(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.getYouTubeID = factory();
  }
}(this, function (exports) {

  return function (url, opts) {
    if (opts == undefined) {
      opts = {fuzzy: true};
    }

    if (/youtu\.?be/.test(url)) {

      // Look first for known patterns
      var i;
      var patterns = [
        /youtu\.be\/([^#\&\?]{11})/,  // youtu.be/<id>
        /\?v=([^#\&\?]{11})/,         // ?v=<id>
        /\&v=([^#\&\?]{11})/,         // &v=<id>
        /embed\/([^#\&\?]{11})/,      // embed/<id>
        /\/v\/([^#\&\?]{11})/         // /v/<id>
      ];

      // If any pattern matches, return the ID
      for (i = 0; i < patterns.length; ++i) {
        if (patterns[i].test(url)) {
          return patterns[i].exec(url)[1];
        }
      }

      if (opts.fuzzy) {
        // If that fails, break it apart by certain characters and look 
        // for the 11 character key
        var tokens = url.split(/[\/\&\?=#\.\s]/g);
        for (i = 0; i < tokens.length; ++i) {
          if (/^[^#\&\?]{11}$/.test(tokens[i])) {
            return tokens[i];
          }
        }
      }
    }

    return null;
  };

}));

},{}],15:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],17:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":31,"warning":34}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],20:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":15,"./DOMStateStorage":17,"./DOMUtils":18,"./ExecutionEnvironment":19,"./createDOMHistory":21,"_process":31,"invariant":28}],21:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":18,"./ExecutionEnvironment":19,"./createHistory":22,"_process":31,"invariant":28}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":15,"./AsyncUtils":16,"./createLocation":23,"./deprecate":24,"./runTransitionHook":27,"deep-equal":11}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":15,"./parsePath":26}],24:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":31,"warning":34}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],26:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":25,"_process":31,"warning":34}],27:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":31,"warning":34}],28:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":31}],29:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _randomGlobal = require('random-global');

var _randomGlobal2 = _interopRequireDefault(_randomGlobal);

var _randomString = require('random-string');

var _randomString2 = _interopRequireDefault(_randomString);

var _libCreatePlayer = require('./lib/createPlayer');

var _libCreatePlayer2 = _interopRequireDefault(_libCreatePlayer);

/**
 * Create a new `YouTube` component.
 */

var YouTube = (function (_React$Component) {
  _inherits(YouTube, _React$Component);

  _createClass(YouTube, null, [{
    key: 'propTypes',
    value: {
      // changing the url will cause a new player to be loaded
      url: _react2['default'].PropTypes.string.isRequired,

      // custom ID for player element
      id: _react2['default'].PropTypes.string,

      // custom class name for player element
      className: _react2['default'].PropTypes.string,

      // https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
      opts: _react2['default'].PropTypes.object,

      // event subscriptions
      onReady: _react2['default'].PropTypes.func,
      onError: _react2['default'].PropTypes.func,
      onPlay: _react2['default'].PropTypes.func,
      onPause: _react2['default'].PropTypes.func,
      onEnd: _react2['default'].PropTypes.func,
      onStateChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      opts: {},
      onReady: function onReady() {},
      onError: function onError() {},
      onPlay: function onPlay() {},
      onPause: function onPause() {},
      onEnd: function onEnd() {},
      onStateChange: function onStateChange() {}
    },

    /**
     * @param {Object} props
     */

    enumerable: true
  }]);

  function YouTube(props) {
    _classCallCheck(this, YouTube);

    _get(Object.getPrototypeOf(YouTube.prototype), 'constructor', this).call(this, props);

    this._containerId = props.id || (0, _randomString2['default'])();
    this._internalPlayer = null;
    this._playerReadyHandle = null;
    this._playerErrorHandle = null;
    this._stateChangeHandle = null;

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerError = this.onPlayerError.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  /**
   * Expose `YouTube`
   */

  _createClass(YouTube, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onChangeUrl();
    }

    /**
     * @param {Object} nextProps
     * @returns {Boolean}
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.url !== this.props.url;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.onChangeUrl();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.onReset();
    }
  }, {
    key: 'onChangeUrl',
    value: function onChangeUrl() {
      var _this = this;

      this.onReset();

      (0, _libCreatePlayer2['default'])(this._containerId, this.props, function (player) {
        _this._internalPlayer = player;

        // YT API requires event handlers to be globalized
        _this._playerReadyHandle = (0, _randomGlobal2['default'])(_this.onPlayerReady);
        _this._playerErrorHandle = (0, _randomGlobal2['default'])(_this.onPlayerError);
        _this._stateChangeHandle = (0, _randomGlobal2['default'])(_this.onPlayerStateChange);

        _this._internalPlayer.addEventListener('onReady', _this._playerReadyHandle);
        _this._internalPlayer.addEventListener('onError', _this._playerErrorHandle);
        _this._internalPlayer.addEventListener('onStateChange', _this._stateChangeHandle);
      });
    }
  }, {
    key: 'onReset',
    value: function onReset() {
      if (this._internalPlayer && typeof this._internalPlayer.removeEventListener === 'function') {
        this._internalPlayer.removeEventListener('onReady', this._playerReadyHandle);
        this._internalPlayer.removeEventListener('onError', this._playerErrorHandle);
        this._internalPlayer.removeEventListener('onStateChange', this._stateChangeHandle);
      }
      if (this._internalPlayer) {
        this._internalPlayer.destroy();
      }

      delete this._playerReadyHandle;
      delete this._playerErrorHandle;
      delete this._stateChangeHandle;
    }

    /**
     * https://developers.google.com/youtube/iframe_api_reference#onReady
     *
     * @param {Object} event
     *   @param {Object} target - player object
     */

  }, {
    key: 'onPlayerReady',
    value: function onPlayerReady(event) {
      this.props.onReady(event);
    }

    /**
     * https://developers.google.com/youtube/iframe_api_reference#onError
     *
     * @param {Object} event
     *   @param {Integer} data  - error type
     *   @param {Object} target - player object
     */

  }, {
    key: 'onPlayerError',
    value: function onPlayerError(event) {
      this.props.onError(event);
    }

    /**
     * https://developers.google.com/youtube/iframe_api_reference#onStateChange
     *
     * @param {Object} event
     *   @param {Integer} data  - status change type
     *   @param {Object} target - actual YT player
     */

  }, {
    key: 'onPlayerStateChange',
    value: function onPlayerStateChange(event) {
      this.props.onStateChange(event);

      switch (event.data) {

        case window.YT.PlayerState.ENDED:
          this.props.onEnd(event);
          break;

        case window.YT.PlayerState.PLAYING:
          this.props.onPlay(event);
          break;

        case window.YT.PlayerState.PAUSED:
          this.props.onPause(event);
          break;

        default:
          return;
      }
    }

    /**
     * @returns Object
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { id: this._containerId, className: this.props.className || '' });
    }
  }]);

  return YouTube;
})(_react2['default'].Component);

exports['default'] = YouTube;
module.exports = exports['default'];
},{"./lib/createPlayer":30,"random-global":32,"random-string":33,"react":"react"}],30:[function(require,module,exports){
/**
 * Module dependencies
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getYoutubeId = require('get-youtube-id');

var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

/**
 * Create a new `player` by requesting and using the YouTube Iframe API
 *
 * @param {String} containerId - id of div container
 * @param {Object} props
 *   @param {String} url - url to be loaded
 *   @param {Object} playerVars - https://developers.google.com/youtube/player_parameters
 *
 * @param {Function} cb
 */

var createPlayer = function createPlayer(containerId, props, cb) {
  var YouTubeIframeLoader = require('youtube-iframe');
  var params = _extends({}, props.opts, { videoId: (0, _getYoutubeId2['default'])(props.url) });
  return YouTubeIframeLoader.load(function (YT) {
    return cb(new YT.Player(containerId, params));
  });
};

/**
 * Expose `createPlayer`
 */

exports['default'] = createPlayer;
module.exports = exports['default'];
},{"get-youtube-id":14,"youtube-iframe":35}],31:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],32:[function(require,module,exports){
/**
 * Module dependencies
 */

var randomize = require('random-string');

/**
 * Expose `globalize`
 */

module.exports = globalize;

/**
 * Expose some variable onto the global namespace under
 * a randomly generated string, then return that alias.
 *
 * @param {*} variable to be exposed
 * @returns {String}
 */

function globalize(variable) {
  var alias = randomize();
  window[alias] = variable;
  return alias;
}

},{"random-string":33}],33:[function(require,module,exports){
/*
 * random-string
 * https://github.com/valiton/node-random-string
 *
 * Copyright (c) 2013 Valiton GmbH, Bastian 'hereandnow' Behrens
 * Licensed under the MIT license.
 */

'use strict';

var numbers = '0123456789',
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';


function _defaults (opts) {
  opts || (opts = {});
  return {
    length: opts.length || 8,
    numeric: typeof opts.numeric === 'boolean' ? opts.numeric : true,
    letters: typeof opts.letters === 'boolean' ? opts.letters : true,
    special: typeof opts.special === 'boolean' ? opts.special : false
  };
}

function _buildChars (opts) {
  var chars = '';
  if (opts.numeric) { chars += numbers; }
  if (opts.letters) { chars += letters; }
  if (opts.special) { chars += specials; }
  return chars;
}

module.exports = function randomString(opts) {
  opts = _defaults(opts);
  var i, rn,
      rnd = '',
      len = opts.length,
      randomChars = _buildChars(opts);
  for (i = 1; i <= len; i++) {
    rnd += randomChars.substring(rn = Math.floor(Math.random() * randomChars.length), rn + 1);
  }
  return rnd;
};

},{}],34:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":31}],35:[function(require,module,exports){
(function(window) {
	var YouTubeIframeLoader = {
		src: 'https://www.youtube.com/iframe_api',
		loading: false,
		loaded: false,
		listeners: [],

		load: function(callback) {
			var _this = this;
			this.listeners.push(callback);

			if(this.loaded) {
				setTimeout(function() {
					_this.done();
				});
				return;
			}

			if(this.loading) {
				return;
			}

			this.loading = true;

			window.onYouTubeIframeAPIReady = function() {
				_this.loaded = true;
				_this.done();
			};

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.src;
			document.body.appendChild(script);
		},

		done: function() {
			delete window.onYouTubeIframeAPIReady;

			while(this.listeners.length) {
				this.listeners.pop()(window.YT);
			}
		}
	};

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = YouTubeIframeLoader;
	} else {
		window.YouTubeIframeLoader = YouTubeIframeLoader;
	}
}(window));

},{}]},{},[7]);
