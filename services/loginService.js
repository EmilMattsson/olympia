import bcrypt from 'bcrypt';
import { LOGIN_MODEL } from '../models';

export const LOGIN_SERVICE = {
  validateLogin: async (email, password) => {
    const USER = await LOGIN_SERVICE.findLoginByEmail(email);
    if (USER !== null) {
      return  LOGIN_SERVICE.passwordIsValid(USER, password);
    } else {
      throw new Error(`User with email: ${email} does not exist.`);
    }
  },

  findLoginByEmail: async email => {
    const LOGIN_EXISTS = await LOGIN_MODEL.findOne(
      {
        email: email
      },
      (err, login) => {
        if (err) {
          throw Error(err);
        }
      }
    );

    return LOGIN_EXISTS;
  },

  passwordIsValid: async (user, password) => {
    return await bcrypt.compare(user.password, password);
  },

  createLogin: async (email, password, passwordConfirm) => {
    const USER = findUserByEmail(email);

    if (USER !== null) {
      return passwordIsValid(password);
    } else {
      throw new Error(`User with email: ${email} does not exist.`);
    }
  }
};
