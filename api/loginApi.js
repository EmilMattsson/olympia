import { LOGIN_SERVICE } from '../services';

export const LOGIN_API = {
  loginUser: async (req, res, next) => {
    try {
      const EMAIL = req.body.email;
      const PLAIN_PASSWORD = req.body.password;

      if (EMAIL && PLAIN_PASSWORD) {
        const IS_VALID_LOGIN = await LOGIN_SERVICE.validateLogin(
          EMAIL,
          PLAIN_PASSWORD
        );
        
        if (IS_VALID_LOGIN) {
          // TODO: find and return user
        }
      } else {
        throw new Error(`Err: invalid email: ${EMAIL}, or : ${PLAIN_PASSWORD}`);
      }
    } catch (err) {
      next(err);
    }
  }

  // createLogin: async (req, res, next) => {
  //   try {
  //     const EMAIL = req.body.email;
  //     const PASSWORD = req.body.password;
  //     const PASSWORD_CONFIRM = req.body.passwordConfirm;

  //     const IS_VALID_LOGIN = await LOGIN_SERVICE.createLogin(
  //       EMAIL,
  //       PASSWORD,
  //       PASSWORD_CONFIRM
  //     );

  //     if (IS_VALID_LOGIN) {
  //       // TODO: find and return user
  //     }
  //   } catch (err) {
  //     next(err);
  //   }
  // }
};
