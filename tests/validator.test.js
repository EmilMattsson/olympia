import validator from 'validator';

import {
  isAlphabetical,
  stringIsNullOrUndefined
} from '../middleware/validator';

describe('check if string is alphabetical or not', () => {
  // Positive tests
  test('lower case alphabetical string', () => {
    expect(isAlphabetical('abcdefghijklmnopqrstuvwxzy')).toBe(true);
  });

  test('upper case alphabetical string', () => {
    expect(isAlphabetical('ABCDEFQRSTUVWXZY')).toBe(true);
  });

  // Negative tests
  test('lower case swedish characters (åäö)', () => {
    expect(isAlphabetical('åäö')).toBe(false);
  });

  test('lower case swedish characters (ÅÄÖ)', () => {
    expect(isAlphabetical('ÅÄÖ')).toBe(false);
  });

  test('numeric string is not alphabetical', () => {
    expect(isAlphabetical('1234567890')).toBe(false);
  });

  test('special characters are not alphabetical', () => {
    expect(isAlphabetical('!"#¤%&/()=?')).toBe(false);
  });

  test('whitespaces are not alphabetical', () => {
    expect(isAlphabetical(' \t\n')).toBe(false);
  });
});

describe('check if string is an email', () => {
  // Positive tests
  test('valid email is indeed an email', () => {
    expect(validator.isEmail('emil@google.com')).toBe(true);
  });

  // Negative tests
  test('only full domain is not an email', () => {
    expect(validator.isEmail('@google.com')).toBe(false);
  });
  
  test('only partial domain is not an email', () => {
    expect(validator.isEmail('e@google')).toBe(false);
  });
  
  test('without domain is not an email', () => {
    expect(validator.isEmail('e@')).toBe(false);
  });
  
  test('empty string is not an email', () => {
    expect(validator.isEmail('')).toBe(false);
  });
});

describe('check if string is empty', () => {
  // Positive tests
  test('an empty string is empty', () => {
    expect(validator.isEmpty('')).toBe(true);
  });

  // Negative tests
  test('string that is not empty is not empty', () => {
    expect(validator.isEmpty('str123')).toBe(false);
  });
  
  test('string with whitespace', () => {
    expect(validator.isEmpty(' ')).toBe(false);
  });

  test('string with tab is not empty', () => {
    expect(validator.isEmpty('  ')).toBe(false);
  });
  
  test('string with new line is not empty', () => {
    expect(validator.isEmpty('\n')).toBe(false);
  });
});

describe('check if string is not null or undefined', () => {
  // Positive tests
  test('string that is empty to be undefined', () => {
    expect(stringIsNullOrUndefined('')).toBe(undefined);
  });

  // Negative tests
  test('null to throw Error', () => {
    expect(() => {
      stringIsNullOrUndefined(null);
    }).toThrow('String is null or undefined.');
  });
  
  test('undefined to throw Error', () => {
    expect(() => {
      stringIsNullOrUndefined(undefined);
    }).toThrow('String is null or undefined.');
  });
});
