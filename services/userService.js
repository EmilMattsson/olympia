import bcrypt from 'bcrypt';
import { USER_MODEL } from '../models';

export const USER_SERVICE = {
  findUserByEmail: async email => {
    const USER = await USER_MODEL.findOne({ email: email }, (err, user) => {
      if (err) {
        throw Error(`Could not find user with email: ${email}`);
      }
      return user;
    });

    return USER;
  }
};
