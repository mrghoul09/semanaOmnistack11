/**
 * Métodos HTTP:
 * 
 * GET: Buscar info do back
 * POST: Criar info no back
 * PUT: alterar uma info back
 * DELETE: deletar no back
 */
/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where
   */


const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');
const app = express();
const { errors } = require('celebrate');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
