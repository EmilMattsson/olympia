import express from 'express';
const USER_ROUTER = express.Router();

import { User } from '../models';

/* GET users listing. */
USER_ROUTER.get('/', (req, res, next) => {
  res.send('These are not the users you are looking for..');
});

// Add new user
USER_ROUTER.post('/', (req, res, next) => {
  console.log(req.body);
  // TODO create middleware for validation

  const NEW_USER_DATA = req.body;
  // TODO verify userData, create a new user, and save to mongodb
  const USER = new User({
    username: NEW_USER_DATA.username,
    password: NEW_USER_DATA.password,
    email: NEW_USER_DATA.email
  });

  USER.save(err => {
    console.log('lol');
    if (err) console.log(err);
  });
  res.status(201).send(`User created ${USER._id}`);
});

USER_ROUTER.get('/:userId', (req, res, next) => {});

export { USER_ROUTER };