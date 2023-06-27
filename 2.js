const express = require('express');
const app = express();

const port = 3016;

let counter = 0;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
