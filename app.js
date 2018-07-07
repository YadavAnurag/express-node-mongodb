var express = require('express');
var StudentRoute = require('./routes/StudentRoutes');
var students = require('./data/students.json');
var _ = require('lodash');

const PORT = 4000;

var u = (version, path) => `/api/${version}/${path}`;
var buildUrl = u;
var STUDENTS_BASE_URL = buildUrl('v1', 'students');
var server = express();
server.use(STUDENTS_BASE_URL, StudentRoute);


server.post('/', (req, res) => {
    res.send('<h1>Hi this is me</h1>');
});


server.get('/route-handlers', (req, res, next) => {
    //handling route handler
    res.send('Route Handlers');
    // next();
}, (req, res, next) => {
    console.log('Second Route handler');
    next();
}, (req, res) => {
    console.log('Third Route handler');

});

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);

});
