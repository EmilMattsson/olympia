import validator from 'validator';

import { isAlphabetical } from '../middleware/validator';

test('checks if string is alphabetical or not', () => {
  // Positive tests
  expect(isAlphabetical('string')).toBe(true);

  // Negative tests
  expect(isAlphabetical('1234567890')).toBe(false);
  expect(isAlphabetical('!"#¤%&/()=?')).toBe(false);
  expect(isAlphabetical('String with  whitespaces')).toBe(false);
});

test('check if string is an email', () => {
  // Positive tests
  expect(validator.isEmail('emil@google.com')).toBe(true);

  // Negative tests
  expect(validator.isEmail('@google.com')).toBe(false);
  expect(validator.isEmail('e@google')).toBe(false);
  expect(validator.isEmail('e@')).toBe(false);
  expect(validator.isEmail('')).toBe(false);
});