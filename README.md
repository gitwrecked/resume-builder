## Team: GitWrecked -- subject to change

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

## Installation
1. Download the repository
2. Install npm and bower modules: `npm install`
3. Start node: `node server.js` OR `nodemon server.js` for development
4. View in browser at http://localhost:3001

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

### Heroku 
#### Deploy
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
