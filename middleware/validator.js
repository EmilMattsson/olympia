import validator from 'validator';

export function validateUserEmailAndPassword(req, res, next) {
  const UNVERIFIED_USER_EMAIL = req.body.email;
  const UNVERIFIED_USER_PASSWORD = req.body.password;
  
  if (UNVERIFIED_USER_EMAIL == undefined || !validator.isEmail(UNVERIFIED_USER_EMAIL)) {
    console.error('EMAIL_REQUIRED');
  } else if (UNVERIFIED_USER_PASSWORD == undefined || UNVERIFIED_USER_PASSWORD == '') {
    console.error('PASSWORD_REQUIRED');
  } else {
    next();
  }
}

const isAlphabetical = str => {
  return /^[A-Za-z]+$/.test(str);
};