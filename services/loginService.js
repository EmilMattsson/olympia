import bcrypt from 'bcrypt';
import { LOGIN_MODEL } from '../models';
import { Error } from 'mongoose';

export const LOGIN_SERVICE = {
  findOneByEmail: async email => {
    const LOGIN_EXISTS = await LOGIN_MODEL.findOne(
      { email: email },
      (err, user) => {
        if (err) {
          throw Error(err);
        }
      }
    );

    bcrypt.hash('bob', 10).then((e )=> console.log(e) );

    return LOGIN_EXISTS;
  },
  isValidPassword: async (user, password) => {
    return await bcrypt.compare(user.password, password);   
  }
};
