import { Schema, model } from 'mongoose';

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscle_group: { type: String },
  repititions: { type: String },
  sets: { type: String }
});

const Exercise = model("Exercise", ExerciseSchema);

export default { ExerciseSchema, Exercise };