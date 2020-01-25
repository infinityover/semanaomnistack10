const { Router } = require('express');
const devController = require('./controllers/DevController')
const searchController = require('./controllers/SearchController')
const route = Router(); 


route.post('/devs', devController.store);
route.get('/devs', devController.index);

route.get('/search', searchController.index)

module.exports = route;