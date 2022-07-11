const route = require('express').Router();
const controller__RICK_AND_MORTY = require('../controllers/rick_and_morty.controller');
const { valid__ID, valid__OBJECT_BODY } = require('../middleware/rick_and_morty.middleware');

route.get('/all', controller__RICK_AND_MORTY.find__rick_and_morty__controller__ALL);
route.get('/:id', valid__ID, controller__RICK_AND_MORTY.find__rick_and_morty__controller__BY_ID);
route.post('/create', valid__OBJECT_BODY, controller__RICK_AND_MORTY.create__rick_and_morty__CONTROLLER);
route.put('/update/:id', valid__ID, valid__OBJECT_BODY, controller__RICK_AND_MORTY.update__rick_and_morty__CONTROLLER);
route.delete('/delete/:id', valid__ID, controller__RICK_AND_MORTY.delete__rick_and_morty__CONTROLLER);

module.exports = route;
