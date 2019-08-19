import express from 'express';
const USER_ROUTER = express.Router();

import { USER_MODEL } from '../models';
import { CREATED } from '../models/httpStatusCodes';

/* GET users listing. */
USER_ROUTER.get('/', (req, res, next) => {
  res.send('These are not the users you are looking for..');
});

// Add new user
USER_ROUTER.post('/create', (req, res, next) => {
  console.log(req.body);

  const NEW_USER_DATA = req.body;
  const USER = new USER_MODEL({
    username: NEW_USER_DATA.username,
    password: NEW_USER_DATA.password,
    email: NEW_USER_DATA.email
  });

  USER.save(err => {
    if (err) console.error(err);
  });
  res.status(CREATED).send(`User created ${USER._id}`);
});

USER_ROUTER.get('/:userId', (req, res, next) => {});

export { USER_ROUTER };