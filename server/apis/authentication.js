// authentication middleware ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');

var authenticate = express.Router();

authenticate.use(function(req, res, next) {
    console.log('token authentication: ' + req.body.token);
    var token = req.body.token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                return res.json({
                    msg: 'log in first..'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            msg: 'log in first..'
        });
    }
});

module.exports = authenticate;