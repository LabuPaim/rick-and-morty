const mongoose = require('mongoose');

function connect__DB() {
  mongoose
    .connect(process.env.DATABASE_URL, {
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
