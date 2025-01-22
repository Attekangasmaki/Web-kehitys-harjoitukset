import express from 'express';
import { getItems } from './items.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.get('/api/avg/:num1/:num2/num3', (req, res) => {
  try{
    console.log('req.params');
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const num3 = parseInt(req.params.num3);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      Error('Jokin numeroista ei ole kelvollinen')
    }

    const avg = (num1 + num2 + num3) /3;

    res.json({
      num1,
      num2,
      num3,
      avg,
    });
  }catch (err) {
    res.status(400).json({
      error: err.message,
    })
  }
});


app.use('/sivusto', express.static('public'));

//middleware, joka lukee json-datan POST-pyyntöjen rungosta (body)
app.use(express.json());

app.get('/api/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// items resurssin päätepisteet (endpoint)
app.get('/api/items', getItems);

app.get('/api/sum/', (req, res) => {
  console.log('req.params');
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
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
