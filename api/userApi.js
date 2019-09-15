import { USER_SERVICE } from '../services';

export const USER_API = {
  getUserById: async (req, res, next) => {
    try {
      const USER_EMAIL = req.params.email;

      const user = await USER_SERVICE.getUserByEmail(USER_EMAIL);

      res.json(user);
    } catch (err) {
      throw new Error(`Failed to get user with id: ${USER_ID}`);
    }
  }
};
