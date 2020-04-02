 const express = require('express');
 
 const NgoController = require('./controllers/NgoController')
 const OccurrenceController = require('./controllers/OccurrenceController')
 const NgoQueryController = require('./controllers/NgoQueryController')
 const SessionController = require('./controllers/SessionController')

 const routes = express.Router();

routes.post('/sessions', SessionController.create)

 routes.get('/ngos', NgoController.index);
 routes.post('/ngos', NgoController.create);

 routes.get('/occurrences', OccurrenceController.index);
 routes.post('/occurrences', OccurrenceController.create);
 routes.delete('/occurrences/:id', OccurrenceController.delete);

 routes.get('/ngos/query', NgoQueryController.index);

 module.exports = routes;