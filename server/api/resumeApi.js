// resume api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var Resume = require('server/models/resume');
var api = express.Router();

// authentication block, 
// place api routes that do not need to be authenticated above this
api.use(function(req, res, next) {
    var token = req.headers.rb_token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    msg: 'you must be logged in to perform this function...'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            msg: 'you must be logged in to perform this function...'
        });
    }
});

//retrieve resume based on ID
api.get('/:resume_id', function(req, res) {
    Resume.findById(req.params.resume_id, function(err, resume) {
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

api.put('/:resume_id', function(req, res) {

    var conditions = {
        _id: req.params.resume_id
    };

    var options = {
        runValidators: true
    };

    Resume.update(conditions, req.body, options, function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                msg: err.message
            });
        }
        return res.json({
            success: true,
            msg: 'resume updated successfully...'
        });
    });
});

module.exports = api;