// resume profile api ===================
// This API is responsible for managing the ResumeProfile model. 
// It can create, modify, and retrieve profiles from the backend.
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var atob = require('atob');
var api = express.Router();

//import schemas
var ResumeProfile = require('server/models/resumeProfile');
var Resume = require('server/models/resume');

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
        return res.status(401).json({
            msg: 'you must login before running this function...'
        });
    }
});

// retrieve the resume profile resource
// conditions allow data to be retrieved based on field value
// projections allows returned data to be filtered to specific elements
api.get('/', function(req, res) {

    var conditions = {};
    var projections;

    //if query parameter is given, only retrieve profiles by email
    if (req.query.email) {
        conditions.email = atob(req.query.email);
    }

    //only return requested data
    if (req.query.projections) {
        projections = atob(req.query.projections)
    }

    ResumeProfile.find(conditions, projections)
        .populate('originalResume modifiedResume')
        .exec(function(err, profiles) {
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

// Retrieve resume profile by profile id.
// Returns all elements in the model
api.get('/:profile_id', function(req, res) {
    ResumeProfile.findById(req.params.profile_id)
        .populate('originalResume modifiedResume')
        .exec(function(err, profile) {
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

// API for creating new resume profile
// Will also create and associate Resume and Modified Resume objects.
api.post('/', function(req, res) {

    var originalResume = new Resume(req.body.originalResume);
    var modifiedResume = new Resume(req.body.modifiedResume);
    var profile = new ResumeProfile({
        email: req.body.email,
        profileName: req.body.profileName,
        originalResume: originalResume,
        modifiedResume: modifiedResume
    });

    //Save resume profile, then save original and modified resume objects
    //Because these are distinct documents, we cannot save atomically
    profile.save()
        .then(function() {
            originalResume.type = 'original';
            return originalResume.save();
        }).then(function() {
            modifiedResume.type = 'modified';
            return modifiedResume.save();
        }).then(function() {
            return res.status(201).json({
                msg: 'resume profile saved successfully...',
                resumeProfile: profile
            });
        }).catch(function(err) {
            console.log(err);
            return res.status(500).json({
                msg: err.message
            });
        });
});

// Update an existing Resume Profile using given id
api.put('/:profile_id', function(req, res) {
    ResumeProfile.where({
        _id: req.params.profile_id
    }).update(req.body, function(err, update) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                msg: err.message
            });
        } else {
            return res.json({
                success: true,
                msg: 'resume profile updated successfully...',
                resumeProfile: update
            });
        }
    });
});

module.exports = api;