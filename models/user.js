import { Schema, model } from 'mongoose';
import WorkoutSchema from './workout';

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  workouts: [ WorkoutSchema ]
});

export default User = model('User', UserSchema);