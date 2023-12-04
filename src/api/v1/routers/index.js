const UsersControllers = require('../controllers/UsersControllers');

const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X



//----------------------- INitizlalzing your apis's routes here --------------------X
Routers.get('/breeds',UsersControllers().Breeds); // Fetching the breed in sense of country in text file, using GET '/api/breeds'
Routers.get('/all',UsersControllers().All); // Fetching all the breeds in text file, using GET '/api/all'
Routers.post('/payload',UsersControllers().Payload); // Try to adding a payload, using POST '/api/payload'

module.exports = Routers