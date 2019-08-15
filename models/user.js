import { Schema, model } from 'mongoose';
import { WorkoutSchema } from './workout';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (e) => {
        // use predefined email validator?
      }
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (p) => {
        // limit length?
      }
    }
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  workouts: [ WorkoutSchema ]
}).pre('save', (next) => {
  
});

export const User = model('User', UserSchema);