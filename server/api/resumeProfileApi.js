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
    var token = req.headers.rb_token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    msg: 'you must login before running this function...'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.statues(401).json({
            msg: 'you must login before running this function...'
        });
    }
});

//retrieve all resumes profiles or filter by email
api.get('/', function(req, res) {

    var conditions = {};

    //if query parameter is given, only retrieve profiles by email
    if (req.query.email) {
        conditions = {
            email: atob(req.query.email)
        };
    }

    ResumeProfile.find(conditions, function(err, profiles) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                msg: 'failed to retrieve resume profiles...'
            });
        }
        return res.json({
            success: true,
            profiles: [profiles]
        });
    });
});

//retrieve resume profile by profile id
api.get('/:profile_id', function(req, res) {
    ResumeProfile.findById(req.params.profile_id, function(err, profile) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                msg: 'failed to retrieve profile...'
            });
        }
        return res.json({
            success: true,
            profile: profile
        });
    });
});

//api for creating new resume profile
api.post('/', function(req, res) {
    var profile = new ResumeProfile({
        email: req.body.email,
        profileName: req.body.profileName,
        resume: req.body.resume,
        edited: req.body.edited
    });

    profile.save(function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                msg: 'unable to create new resume profile...'
            })
        } else {
            return res.json({
                success: true,
                msg: 'resume profile saved successfully...'
            });
        }
    });
});

//Update an existing Resume Profile
api.put('/:profile_id', function(req, res) {
    ResumeProfile.where({
        _id: req.params.profile_id
    }).update(req.body, function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                msg: 'unable to update resume profile...'
            })
        } else {
            return res.json({
                success: true,
                msg: 'resume profile updated successfully...'
            });
        }
    });
});

module.exports = api;