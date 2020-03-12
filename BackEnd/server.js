// Define imports 
const express = require('express');
const app = express();
const cors = require('cors');
const con = require('./config/sqlConnection');
app.use(express.json({extended:false}));
app.use(cors({origin:'http://localhost:3000',credentials:true}));

app.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    response.setHeader('Cache-Control', 'no-cache');
    next();
});


const studentLogin=require('./studentAPIs/login')
const studentSignUp=require('./studentAPIs/signUp')
const studentProfile=require('./studentAPIs/studentProfile')

app.get('/', (request,response) => response.send('API Test Run Successful'));

// Routes for Student APIs 
app.use('/student/login',studentLogin);
app.use('/student/register', studentSignUp);

// Profile
app.use('/profile', studentProfile);

// Routes for Job APIs
const studentJobs = require('./jobAPIs/jobAPIs');
app.use('/jobs', studentJobs);

// Routes for Event APIs 
app.use('/events', require('./eventAPIs/eventAPIs'));

// Routes for Application APIs 
app.use('/applications', require('./applicationAPIs/applicationAPIs'));

const companyLogin=require('./companyAPIs/login')
const companySignUp=require('./companyAPIs/signUp')
// Routes for Company APIs 
app.use('/company/login',companyLogin );
app.use('/company/register',companySignUp );

app.use('/company/companyProfile', require('./companyAPIs/companyProfile'));


app.listen(3002, () => console.log("Server Listening on port 3002"));