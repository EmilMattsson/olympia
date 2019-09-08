import { model, Schema } from 'mongoose';
export const LOGIN_SCHEMA = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const LOGIN_MODEL = new model('login', LOGIN_SCHEMA);