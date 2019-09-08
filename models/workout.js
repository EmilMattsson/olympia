import { Schema, model } from 'mongoose';
import { ExerciseSchema } from './exercise';

export const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  exercises: [ ExerciseSchema ]
});

export const Workout = model('Workout', WorkoutSchema);