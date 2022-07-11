const route = require('express').Router();

const swagger__UI = require('swagger-ui-express');
const swagger__DOCUMENT = require('../../swagger.json');

route.use('/', swagger__UI.serve);
route.get('/', swagger__UI.setup(swagger__DOCUMENT));

module.exports = route;
