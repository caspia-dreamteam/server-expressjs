const express = require('express');
const app = express();
const port = 3000;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const access_token = 'dhw7a89dghaw8dgaw8dgwadaw';
  res.status(200).json({access_token});
});

app.post('/products', (req, res) => {
  const { name, price, desc } = req.body;
  Product
    .create({ name, price, desc })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error'});
    })
});

app.listen(port);