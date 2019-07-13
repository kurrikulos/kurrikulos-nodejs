// Sistema para criação de currículos online
// Criado por Deyvison Borges
// insta: _deyvisonborges
// github: https://github.com/deeborges
// email: web.dborges@gmail.com
// licensa: MIT
// Ps.: Projeto em standby, que tal rodar ele novamente? Fica a dica.   ;)

const app = require('./bin/index');
const keys = require('./bin/keys');
const connection = require('./src/middlewares/conection');

// informacoes do server
app.listen(keys.server.port, (err) => {
  connection.connect();
  if(err) {
    console.log('==> [-] aplicação');
  } else {
    console.log('==> [+] aplicação');
  }
});
