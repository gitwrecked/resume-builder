// resume api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var ResumeProfile = require('server/models/resumeProfile');

var api = express.Router();

//retrieve all resumes profiles
api.get('/', function(req, res) {
    ResumeProfile.find(function(err, resumes) {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                msg: 'failed to retrieve all resumes'
            });
        }
        return res.json({
            success: true,
            resumes: [resumes]
        });
    });
});

//retrieve resume based on ID
//TODO change to email instead, currently won't have much use
api.get('/:resume_id', function(req, res) {
    ResumeProfile.findById(req.params.resume_id, function(err, resume) {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                msg: 'failed to retrieve resume'
            });
        }
        return res.json({
            success: true,
            resume: resume
        });
    });
});

module.exports = api;