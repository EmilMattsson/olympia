import { model, Model, Schema } from 'mongoose';
import { USER_SCHEMA } from './user';

export const LOGIN_SCHEMA = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user: { USER_SCHEMA }
});

export const LOGIN_MODEL = new model('login', LOGIN_SCHEMA);