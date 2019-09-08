import express from 'express';
import { LOGIN_API } from '../api/loginApi';

const LOGIN_ROUTER = express.Router();

LOGIN_ROUTER.get('/', (req, res, next) => {
  res.send('LOGIN');
});

LOGIN_ROUTER.post('/', (req, res, next) => {
  try {
    const LOGIN_PROMISE = LOGIN_API.loginUser(req, res, next);

    LOGIN_PROMISE.then(response => {
      const USER = response;
      // USER.redirect(`/users/:${USER._id}`);
    });
  } catch (err) {
    console.log('432', err);
  }
});

export { LOGIN_ROUTER };