import { Schema, model } from 'mongoose';
import ExerciseSchema from './exercise';

const WorkoutSchema = new Schema({
  name: { type: String, required: true },
  exercises: [ ExerciseSchema ]
});

const Workout = model('Workout', WorkoutSchema);

export default { WorkoutSchema, Workout }; 