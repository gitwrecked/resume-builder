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

//retrieve all resumes
api.get('/resumes', function(req, res) {
    Resume.find(function(err, resumes) {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                msg: 'failed to retrieve all resumes'
            })
        }
        return res.json({
            success: true,
            data: resumes
        });
    });
});

//retrieve resume based on ID
api.get('/resumes/:resume_id', function(req, res) {
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
            data: resume
        });
    });
});

api.delete('/resumes/:resume_id', function(req, res) {
    Resume.remove({
        _id: req.params.resume_id
    }, function(err, resume) {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                msg: 'unable to delete resume'
            });
        } else {
            return res.json({
                success: true,
                msg: 'successfully deleted resume'
            });
        }
    });
});

module.exports = api;