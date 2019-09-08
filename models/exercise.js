import { Schema, model } from 'mongoose';
import { OccurenceSchema } from './occurence';

export const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  muscleGroup: {
    type: String
  },
  occurences: [ OccurenceSchema ]
});

export const Exercise = model('Exercise', ExerciseSchema);