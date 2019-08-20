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
  const NEW_USER_EMAIL = req.body.email;
  const PLAIN_USER_PASSWORD = req.body.password;

  const SALT_ROUNDS = 10;
  bcrypt.hash(PLAIN_USER_PASSWORD, SALT_ROUNDS).then(ENCRYPTED_PASSWORD => {

    const USER = new LOGIN_MODEL({
      email: NEW_USER_EMAIL,
      password: ENCRYPTED_PASSWORD
    });

    USER.save(err => {
      if (err) {
        next(err);
      } else {
        res.status(CREATED).send(`User created ${USER._id}`);
      }
    });
  }).catch(err => next(err));
});

USER_ROUTER.get('/:userId', (req, res, next) => {});

export { USER_ROUTER };