import { Schema, model } from 'mongoose';
import { OccurenceSchema } from './occurence';

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscleGroup: { type: String },
  repititions: { type: String },
  sets: { type: String },
  occurences: [ OccurenceSchema ]
});

const Exercise = model('Exercise', ExerciseSchema);

export default { ExerciseSchema, Exercise };