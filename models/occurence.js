import { Schema, model } from 'mongoose';

const OccurenceSchema = new Schema({
  weight: { type: Number },
  date: { type: Date.now() }
});

const Occurence = model('Occurence', OccurenceSchema);

export default { OccurenceSchema, Occurence };
