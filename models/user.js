import { Schema, model } from 'mongoose';
import { WorkoutSchema } from './workout';

export const USER_SCHEMA = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  workouts: [WorkoutSchema]
});

export const USER_MODEL = model('User', USER_SCHEMA);