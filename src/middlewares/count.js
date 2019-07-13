/*
  Middleware para fazer a contagem de requisições feitas 
  nas URL's.
*/
let contador = 0;

const adicionar = async (req, res, next) => {
  contador += 1;
  next();
};

const contar = () => {
  return contador;
};

module.exports = {
  adicionar,
  contar,
};