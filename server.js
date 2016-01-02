// Babel ES6/JSX Compiler
require('babel-core/register');

var request = require('request');
var xml2js = require('xml2js');
var mongoose = require('mongoose');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var ExpressPeerServer = require('peer').ExpressPeerServer;

var routes = require('./app/routes');
var characterRoutes = require('./app/routes/Characters.jsx');
var config = require('./config');

var app = express();
var server = require('http').createServer(app);

app.set('port', process.env.port || 3000);

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// express middle ware
app.use(logger('dev'));
app.use(bodyParser.json()); // parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // parse x-www-urlencoded form data
app.use(express.static(path.join(__dirname, 'public'))); // static assets folder

// peerjs middle ware
app.use('/peerjs', ExpressPeerServer(server, options));

// routing
characterRoutes(app);

// react middle ware
app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

/*
// listen
app.listen(app.get('port'), function() {
   console.log('Express server listening on port ' + app.get('port'));
});
*/

/**
 * Socket.io stuff.
 */
var io = require('socket.io')(server);
var onlineUsers = 0;
var options = {
    debug: true
};

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });

    /*
    // video events
    socket.on('videoPlay', function(data) {
        console.log(data);
    });

    socket.on('videoPause', function(data) {
        console.log(data);
    });

    socket.on('videoEnd', function(data) {
        console.log(data);
    });

    socket.on('videoError', function(data) {
        console.log(data);
    });

    socket.on('videoStateChanged', function(data) {
        socket.broadcast.emit('videoStateChanged', data);
    });
    */
});

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});