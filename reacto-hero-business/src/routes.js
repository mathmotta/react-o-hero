 const express = require('express');
 const { celebrate, Segments, Joi } = require('celebrate');
 
 const NgoController = require('./controllers/NgoController')
 const OccurrenceController = require('./controllers/OccurrenceController')
 const NgoQueryController = require('./controllers/NgoQueryController')
 const SessionController = require('./controllers/SessionController')

 const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),}), SessionController.create)

 routes.get('/ngos', NgoController.index);

 routes.post('/ngos', celebrate({
     [Segments.BODY]: Joi.object().keys({
         name: Joi.string().required(),
         email: Joi.string().required().email(),
         whatsapp: Joi.string().required().min(10).max(12),
         city: Joi.string().required(),
         country: Joi.string().required(),
     })
 }), NgoController.create);

 routes.get('/occurrences', celebrate({
     [Segments.QUERY]: Joi.object().keys({
         page: Joi.number(),
     })
 }), OccurrenceController.index);
 routes.post('/occurrences', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
     }).unknown()
}), OccurrenceController.create);
 routes.delete('/occurrences/:id', celebrate({
     [Segments.PARAMS]: Joi.object().keys({
         id: Joi.number().required(),
     })
 }), OccurrenceController.delete);

 routes.get('/ngos/query',  celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
     }).unknown()}), NgoQueryController.index);

 module.exports = routes;
