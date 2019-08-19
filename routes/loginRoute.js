import express from 'express';
const LOGIN_ROUTER = express.Router();

LOGIN_ROUTER.get('/', (req, res, next) => {
  res.send('LOGIN');
});

LOGIN_ROUTER.post('/', (req, res, next) => {
  const LOGIN_DATA = req.body;

  // TODO validate login, fetch user id

  res.redirect('/users/:userId');
});

export { LOGIN_ROUTER };