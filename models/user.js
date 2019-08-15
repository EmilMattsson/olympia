import { Schema, model } from 'mongoose';
import { WorkoutSchema } from './workout';
import validator from 'validator';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: e => {
        validator.isEmail(e);
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    validate: {
      validator: f => {
        return isAlphabetical(f) && f.length > 0 && f.length < 50;
      }
    }
  },
  lastName: {
    type: String,
    trim: true,
    validate: {
      validator: l => {
        return isAlphabetical(l) && l.length > 0 && l.length < 50;
      }
    }
  },
  workouts: [WorkoutSchema]
}).pre('save', next => {});

const isAlphabetical = str => {
  return /^[A-Za-z]+$/.test(str);
};

export const User = model('User', UserSchema);
