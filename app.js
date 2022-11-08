const express = require('express');
const app = express();
const port = 3000;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const access_token = 'dhw7a89dghaw8dgaw8dgwadaw';
  res.status(200).json({access_token});
});

app.post('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, desc } = req.body;
    await Product.update({ name, price, desc }, { where: {
      id
    }})
    res.status(200).json({ message: 'product has been updated'});
  } catch (error) {
    res.status(500).json({ message: 'internal server error'});
  }
})

app.listen(port);