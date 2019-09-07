import { LOGIN_SERVICE } from '../services';

export default class LoginApi {

  async loginUser(req, res, next) {
    try {
      const EMAIL = req.body.email;
      const PLAIN_PASSWORD = req.body.password;

      const IS_VALID_LOGIN = await LOGIN_SERVICE.validateLogin(EMAIL, PLAIN_PASSWORD);
      if (IS_VALID_LOGIN) {
        // TODO: find and return user
      }
    } catch (err) {
      next(err);
    }
  }
}