import validator from 'validator';

export function validateCreateUserData(req, res, next) {
  const unverifiedData = req.body;

  if (unverifiedData.email == undefined || validator.isEmail(unverifiedData.email)) {
    console.error('EMAIL_REQUIRED');
  } else if (unverifiedData.password == undefined || unverifiedData.password == '') {
    console.error('PASSWORD_REQUIRED');
  } else {
    next();
  }
}

const isAlphabetical = str => {
  return /^[A-Za-z]+$/.test(str);
};