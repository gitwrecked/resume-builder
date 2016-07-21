// resume api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var ResumeProfile = require('server/models/resumeProfile');
var atob = require('atob');

var api = express.Router();

// authentication block, 
// place api routes that do not need to be authenticated above this
api.use(function(req, res, next) {
    var token = req.body.token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                res.status(401);
                return res.json({
                    msg: 'you must register before running this function...'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401);
        return res.json({
            msg: 'you must register before running this function...'
        });
    }
});

//retrieve all resumes profiles
api.get('/', function(req, res) {
    ResumeProfile.find(function(err, profiles) {
        if (err) {
            console.error(err);
            res.status(500);
            return res.json({
                success: false,
                msg: 'failed to retrieve all resume profiles'
            });
        }
        return res.json({
            success: true,
            profiles: [profiles]
        });
    });
});

//retrieve resume profile using email in base64
api.get('/:email', function(req, res) {
    ResumeProfile.find({
        'email': atob(req.params.email)
    }, function(err, profile) {
        if (err) {
            console.error(err);
            res.status(500);
            return res.json({
                success: false,
                msg: 'failed to retrieve profile'
            });
        }
        return res.json({
            success: true,
            profile: profile
        });
    });
});

api.post('/', function(req, res) {
    var profile = new ResumeProfile({
        email: req.body.email,
        profileName: req.body.profileName,
    });

    profile.resume.push(req.body.resume);
    profile.edited.push(req.body.edited);

    profile.save(function(err) {
        if (err) {
            console.error(err);
            res.status(500);
            return res.json({
                // msg: 'failed to save resume profile...'
                msg: err.message
            })
        } else {
            return res.json({
                success: true,
                msg: 'resume profile saved successfully!'
            });
        }
    });
});

module.exports = api;