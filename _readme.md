## Team: GitWrecked

### ResumeEditor
+ Resume tool for edit/proofread/format/styles/guidelines
+ Primary Audience: IT professionals
+ Timeframe: 1 Month (4 weeks)
+ Use Cases:
   + Customer information Input Form, including template selection
   + Automated Processing (proofreading, parsing into domain objects, annotations)
   + Admin review form
   + Admin export and email of resume
+ Requirements
   + Customer Database
   + Resume Inut Form
   + Resume Parser Service
   + Resume Exporter Service 
   + Templates 

## directory Structure - #feature based modularization
```
.
├── app
│   ├── index.html #main html page
│   ├── css #compiled with gulp from /scss
│   ├── assets #any static files, images,fonts,etc.
│   ├── libs #vendor libraries downloaded with bower
│   └── js #all js files
│       ├── controllers #controllers
│       │   ├── controller1.js
│       │   └── controller2.js
│       ├── models #mongo schemas
│       │   ├── model1.js
│       │   └── model2.js
│       ├── services #services
│       │   ├── service1.js
│       │   └── service2.js
│       ├── directives #directives
│       │   ├── directive1.js
│       │   └── directive2.js
│       ├── filters #filters
│       │   ├── filter1.js
│       │   └── filter2.js
│       ├── routes #angular routes
│       │   └── app.routes.js #angular routes using ui.router
│       ├── features #feature based hiearchy
│       │   ├── feature1
│       │   │   ├── feature1.controller.js
│       │   │   └── feature1.template.html
│       │   └── feature2
│       │       ├── feature2.controller.js
│       │       └── feature2.template.html
│       └── resumebuilder.app.js #angular bootstrap
├── jshint
│   └── output.html #code analysis output
├── test
│   ├── report 
│   │   └── index.html #test report output
│   ├── controller #controller specs
│   └── services #service specs
├── node_modules #all modules listed in `package.json`
├── scss
│   ├── style.scss #scss files that compile into `/app/css/style.css`
│   └── _partial.scss #importable scss files
├── config
│   ├── config.json #project configs for server/database
│   └── karma.conf.js #test runner configuration
├── api.routes.js #backend api routes
├── bower.json #front end components (bootstrap,angular,font-awesome,etc.)
├── .travis.yml #travis-ci config for builds
├── .bowerrc #configuration for bower, output directory
├── gulpfile.js #task manager, dev only
├── package.json #backend components, download with `npm install`
├── procfile #heroku app type identifier
├── readme.md #readme
└── server.js #node server
```

## Installation
0. Prerequisites global installs: `git, mongo, node, npm`
1.`sudo npm install -g bower gulp nodemon`
2. Clone or download: `https://github.com/gitwrecked/resume-builder.git`
3. Install npm and bower modules: `npm install`
5. Run `gulp css`, output located in `/app/css/style.css`
6. Run `gulp inject` if necessary, injects import statements into head tag of `/app/index.html`
7. Run `gulp test` , ouput located in `/test/reports/output.html`
8. Start node *normal*: `node server.js` *dev*: `nodemon server.js` *styling*: `gulp start`
9. View in browser at http://localhost:3001

### Initial workflow
1. Client Form submission
2. Data compiled into json object for transport
3. authenticated, and sent to server controller
4. Server app runs parser and builder services 
5. Server app perists resume data to datastore
6. Notification is sent to admin, email or app Notification
7. Admin logs in, reviews proposed changes
8. Admin exports to template, if Client does not specify template
9. App service sends to client via email, could be manual

### Milestones:
+ [x] git connectivity and workflow
+ [x] Wireframe (project framework)
+ [x] Team details (name, brand)
+ [ ] Domain research and documentation (compiled list of resume rules/tips/dosAndDonts)
+ [ ] Fleshed out ui form
+ [ ] Authenticated requests to app
+ [ ] Parsing reg ex services
+ [ ] Resume building api
+ [ ] Resume editing api
+ [ ] Exportable templates
+ [x] Host on server

### TODO: Groundwork
+ [x] Team details (name, brand)
+ [ ] Domain research and documentation (compiled list of resume rules/tips/dosAndDonts)

### TODO: 1. Client Form submission
+ [ ] style form area on ui for form upload
+ [ ] validation logic
+ [ ] application logic
+ [ ] send form data to server (dummy endpoint)

### TODO: server processing
+ [ ] compile list of resume rules

### Roles and Responsibilities
+ Javier: regex parser
+ Ed: 
+ Matt: UI
+ Arun:  
+ Kevin:  

### Resources
+ [Markdown Cheat Sheet For README.md](https://github.com/adam+p/markdown+here/wiki/Markdown+Cheatsheet)
+ [Git Workflow + Feature Branches](https://www.atlassian.com/git/tutorials/comparing+workflows/feature+branch+workflow)
+ [Sequence Diagram Builder](https://www.websequencediagrams.com/)
+ [Heroku and Node.js](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
+ [MLab - MongoDB](https://mlab.com/)
+ [Material Palette](https://www.materialpalette.com/)
+ [Material Design Lite](https://getmdl.io/components/index.html)

### Heroku 
#### Web Deploy
1. go to [Heroku](https://dashboard.heroku.com/)
2. login in
3. select app
4. select deploy
5. scroll to manual deploy and choose branch

#### Command Line Deploy
1. `heroku login` 
2. `git add . `
3. `git commit -m "message"`
4. `heroku config:set MONGOLAB_URI=// url : 'mongodb://<username>:<password>@ds011933.mlab.com:11933/gw_resume-builder'
5. `git push heroku branchName:master`
6. `heroku open`
7. `heroku logs`

#### Remove app and fresh deploy
1. `git remote rm heroku`
2. `heroku create resume-builder5`

View app at `https://resume-builder5.herokuapp.com/`
