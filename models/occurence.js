import { Schema, model } from 'mongoose';

export const OccurenceSchema = new Schema({
  weight: {
    type: Number
  },
  date: {
    type: Date
  }
});

export const Occurence = model('Occurence', OccurenceSchema);