const express = require('express');
const app = express();
const port = 3000;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const access_token = 'dhw7a89dghaw8dgaw8dgwadaw';
  res.status(200).json({access_token});
});

app.listen(port);