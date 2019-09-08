import { Schema, model } from 'mongoose';

export const OccurenceSchema = new Schema({
  weight: {
    type: Number
  },
  repititions: {
    type: String
  },
  sets: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export const Occurence = model('Occurence', OccurenceSchema);