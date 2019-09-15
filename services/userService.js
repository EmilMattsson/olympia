import { USER_MODEL } from '../models';

export const USER_SERVICE = {
  createUser: async user => {
    const NEW_USER = new USER_MODEL({ email: user.email });
    NEW_USER.save()
    .then(newUser => {
      return newUser;
    })
    .catch(err => {
      throw new Error('Failed to save new user to db' + err);
    });
    return NEW_USER;
  },

  getUserByEmail: async email => {
    const USER = await USER_MODEL.findOne({ email: email }, (err, user) => {
      if (err) {
        throw Error(`Could not find user with email: ${email} Error: ${err}`);
      }
      return user;
    });

    return USER;
  },

  updateUser: async user => {
    const UPDATED_USER = await USER_MODEL.findOneAndUpdate({ email: user.email }, (err, updatedUser) => {
      if (err) {
        throw new Error(`Failed to update user with email: ${user.email} Error: ${err}`);
      }
      return updatedUser;
    });
    return UPDATED_USER;
  },

  deleteUser: async user => {
    const DELETED_USER = await USER_MODEL.findOneAndRemove({ email: user.email })
    .then(deletedUser => {
      return deletedUser;
    })
    .catch(err => {
      throw new Error(`Failed to delete user with email ${user.email} Error: ${err}`)
    });
    return DELETED_USER;
  }
};
