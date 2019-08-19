import express from 'express';
import bcrypt from 'bcrypt';

import { LOGIN_MODEL } from '../models';
import { CREATED } from '../models/httpStatusCodes';

const USER_ROUTER = express.Router();

/* GET users listing. */
USER_ROUTER.get('/', (req, res, next) => {
  res.send('These are not the users you are looking for..');
});

// Create new user
USER_ROUTER.post('/create', (req, res, next) => {
  console.log(req.body);
  const NEW_USER_EMAIL = req.body.email;
  const PLAIN_USER_PASSWORD = req.body.password;

  const saltRounds = 10;
  let user;
  bcrypt.hash(PLAIN_USER_PASSWORD, saltRounds).then(ENCRYPTED_PASSWORD => {
    user = new LOGIN_MODEL({
      email: NEW_USER_EMAIL,
      password: ENCRYPTED_PASSWORD
    });
  }).catch(err => console.error(err));

  user.save(err => {
    if (err) console.error(err);
  });
  res.status(CREATED).send(`User created ${user._id}`);
});

USER_ROUTER.get('/:userId', (req, res, next) => {});

export { USER_ROUTER };