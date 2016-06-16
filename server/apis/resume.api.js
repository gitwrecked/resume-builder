// resume api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var Resume = require('server/models/resume');

var api = express.Router();

api.post('/resume/upload', function(req, res) {
    var newResume = new Resume({
        email: req.body.email,
        resume: JSON.stringify(req.body)
    });
    newResume.save(function(err) {
        if (err) {
            console.error(err);
            return res.json({
                msg: 'failed to upload resume...'
            });
        }
        return res.json({
            success: true,
            msg: 'resume upload successful'
        });
    });
});

module.exports = api;