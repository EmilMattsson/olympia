import { USER_SERVICE } from '../services';

export const USER_API = {
  getUserById: async (req, res, next) => {
    try {
      const USER_ID = req.params.userId;

      const user = await USER_SERVICE.getUserById(USER_ID);

      res.json(user);
    } catch (err) {
      throw new Error(`Failed to get user with id: ${USER_ID}`);
    }
  }
};
