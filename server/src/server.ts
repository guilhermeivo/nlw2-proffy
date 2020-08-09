import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/users
// cada endereço é chamado de rota, e o users é o recurso
// métodos: GET: buscar ou listar alguma informação, POST: criar alguma nova informação, PUT: atualizar uma informação, DELETE: deletar uma informação

// Parametros
// Corpo (RequestBody): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.listen(3333);