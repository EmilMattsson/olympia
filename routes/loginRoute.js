import express from 'express';
const LOGIN_ROUTER = express.Router();

LOGIN_ROUTER.get('/', (req, res, next) => {
  res.send('LOGIN');
});

export default LOGIN_ROUTER;