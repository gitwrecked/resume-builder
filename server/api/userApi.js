// user api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var User = require('server/models/user');

var api = express.Router();

// authentication block, 
// place api routes that do not need to be authenticated above this
api.use(function(req, res, next) {
    var token = req.headers.rb_token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                return res.json({
                    msg: 'you must be logged in to perform this function...'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            msg: 'you must be logged in to perform this function...'
        });
    }
});

//retrieve all users
api.get('/', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                msg: 'failed to retrieve users'
            });
        }
        return res.json({
            success: true,
            users: users
        });
    });
});

module.exports = api;