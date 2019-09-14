import validator from 'validator';

export function validateUserEmailAndPassword(req, res, next) {
  const UNVERIFIED_USER_EMAIL = req.body.email;
  const UNVERIFIED_USER_PASSWORD = req.body.password;
  
  validateEmail(UNVERIFIED_USER_EMAIL);
  stringIsNullOrUndefined(UNVERIFIED_USER_PASSWORD);
  validator.isEmpty(UNVERIFIED_USER_PASSWORD);

  next();
}

const validateEmail = email => {
  if (!validator.isEmail(email)) {
    throw new Error('EMAIL_REQUIRED');
  }
};

export const stringIsNullOrUndefined = str => {
  if (str === null || str === undefined) {
    throw new Error('String is null or undefined.');
  }
};

export const isAlphabetical = str => {
  return /^[A-Za-z]+$/.test(str);
};