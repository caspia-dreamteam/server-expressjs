const router = require('express').Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const result = await User.create({ username, password });
  res.status(201).json(result);
});

module.exports = router;