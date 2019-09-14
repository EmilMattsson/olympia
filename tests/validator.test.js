import validator from 'validator';

import { isAlphabetical, stringIsNullOrUndefined } from '../middleware/validator';

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

test('checks if string is empty', () => {
  // Positive tests
  expect(validator.isEmpty('')).toBe(true);

  // Negative tests
  expect(validator.isEmpty('str123')).toBe(false);
  expect(validator.isEmpty(' ')).toBe(false);
  expect(validator.isEmpty('  ')).toBe(false);
  expect(validator.isEmpty('\n')).toBe(false);
});

test('checks if string is not null or undefined', () => {
  // Positive tests
  expect(stringIsNullOrUndefined('')).toBe(undefined);

  // Negative tests
  expect(() => {
    stringIsNullOrUndefined(null);
  }).toThrow('String is null or undefined.');
  expect(() => {
    stringIsNullOrUndefined(undefined);
  }).toThrow('String is null or undefined.');
});