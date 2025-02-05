import express from 'express';
import cors from 'cors';
import {getItems, getItemById, addItem, updateItem, deleteItem} from './items.js';
import {addUser, getUserById, getUsers, userLogin } from './users.js';
import {userRouter} from './user-router.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(cors());

app.use('/sivusto', express.static('public'));

//middleware, joka lukee json-datan POST-pyyntöjen rungosta (body)
app.use(express.json());

app.get('/api/items', getItems);
app.get('/api/items/:id', getItemById);
app.post('/api/items', addItem);
app.put('/api/items/:id/', updateItem);
app.delete('/api/items/:id/', deleteItem);


app.use('/api/users', userRouter);





app.get('/api/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/sum/', (req, res) => {
  console.log('req.params');
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({
    num1,
    num2,
    sum: num1 + num2});
});

app.get('/api/sum/:num1/:num2', (req, res) => {
  console.log('req.params');
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  res.json({
    num1,
    num2,
    sum: num1 + num2});
});

app.post('/api/moro', (req, res) => {
  console.log(req.body);
  res.send({reply: 'No moro ' + req.body.sender});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
