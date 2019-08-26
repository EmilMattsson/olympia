import express from 'express';
import { LOGIN_SERVICE } from '../services';

const LOGIN_ROUTER = express.Router();

LOGIN_ROUTER.get('/', (req, res, next) => {
  res.send('LOGIN');
});

LOGIN_ROUTER.post('/', (req, res, next) => {
  const UNVERIFIED_USER_PASSWORD = '$2b$10$FDFzSDOGdCQ2G5tU8Rq67OTECVcm3KbOajmJ9KYCdv4PfEQTiWos.';
  const LOGIN_RESPONSE = LOGIN_SERVICE.findOneByEmail('hansmikael92@gmail.com');

  LOGIN_RESPONSE.then(res => {
    const USER = res;

    LOGIN_SERVICE.isValidPassword(USER, UNVERIFIED_USER_PASSWORD).then(
      passwordResponse => {
        if (passwordResponse) {
          console.log('PW was valid, reroute');
          res.redirect(`/users/:${USER._id}`);
        } else {
          console.log('Invalid password', USER.password, UNVERIFIED_USER_PASSWORD);
        }
      }
    );
  }).catch(err => {
    console.log('432', err);
  });
});

export { LOGIN_ROUTER };