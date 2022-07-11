const mongoose = require('mongoose');

function connect__DB() {
  mongoose
    .connect('mongodb+srv://admin:admin@rick-and-morty.45hb3.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connect__DB;
