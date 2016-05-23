## Team: Hells Angels -- subject to change

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

### Start Up
1. Have node.js installed
2. Execute `npm install` for dependecies
3. Start command (`npm start` OR `nodemon index.js`)?

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
+ [ ] Team details (name, brand)
+ [ ] Domain research and documentation (compiled list of resume rules/tips/dosAndDonts)
+ [ ] Fleshed out ui form
+ [ ] Authenticated requests to app
+ [ ] Parsing reg ex services
+ [ ] Resume building api
+ [ ] Resume editing api
+ [ ] Exportable templates
+ [ ] Host on server

### TODO: Groundwork
+ [ ] Team details (name, brand)
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