const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();
const route = require('./src/routes/rick_and_morty.route');
const connectToDatabase = require('./src/database/mongo.connection');

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/rick_and_morty', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
