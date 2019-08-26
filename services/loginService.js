import bcrypt from 'bcrypt';
import { LOGIN_MODEL } from '../models';
import { Error } from 'mongoose';

export const LOGIN_SERVICE = {
  findOneByEmail: async function(email) {
    let bob =  await LOGIN_MODEL.findOne({ email: email }, (err, user) => {
      if (err) {
        throw Error(err);
      }
    });

    return bob;

  }
};
// // TODO validate login, fetch user id

// bcrypt
//   .compare(UNVERIFIED_USER_PASSWORD, user.password)
//   .then(passwordDoesMatch => {
//     if (passwordDoesMatch) {
//       res.redirect(`/users/:${user._id}`);
//     }
//   })
//   .catch(err => console.error(err));
