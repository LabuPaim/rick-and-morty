require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect__DB = require('./src/database/mongo.connection');
const route = require('./src/routes/rick_and_morty.route');
const swagger__ROUTE = require('./src/routes/swagger.route');

const port = 3001;
const app = express();
connect__DB();

app.use(cors());
app.use(express.json());
app.use('/rick_and_morty', route);
app.use('/api', swagger__ROUTE);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
