import validator from 'validator';

export function validateUserEmailAndPassword(req, res, next) {
  const UNVERIFIED_USER_EMAIL = req.body.email;
  const UNVERIFIED_USER_PASSWORD = req.body.password;
  
  validateEmail(UNVERIFIED_USER_EMAIL);
  validatePassword(UNVERIFIED_USER_PASSWORD);

  next();
}

const validateEmail = email => {
  if (email === undefined || !validator.isEmail(email)) {
    throw new Error('EMAIL_REQUIRED');
  }
};

const validatePassword = password => {
  if (password === undefined || validator.isEmpty(password)) {
    throw new Error('PASSWORD_REQUIRED');
  }
};

export const isAlphabetical = str => {
  return /^[A-Za-z]+$/.test(str);
};