import express from 'express';
import bcrypt from 'bcrypt';
import { USER_MODEL } from '../models';

const LOGIN_ROUTER = express.Router();

LOGIN_ROUTER.get('/', (req, res, next) => {
  res.send('LOGIN');
});

LOGIN_ROUTER.post('/', (req, res, next) => {
  const UNVERIFIED_USER_EMAIL = req.body.email;
  const UNVERIFIED_USER_PASSWORD = req.body.password;

  // TODO validate login, fetch user id
  USER_MODEL.findOne({ email: UNVERIFIED_USER_EMAIL}, (err, user) => {
    if (err) {
      console.error(err);
    }
    bcrypt.compare(UNVERIFIED_USER_PASSWORD, user.password).then(passwordDoesMatch => {
      if (passwordDoesMatch) {
        res.redirect(`/users/:${user._id}`);
      }
    }).catch(err => console.error(err));
  });

});

export { LOGIN_ROUTER };