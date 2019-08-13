import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import helmet from 'helmet';

import config from './config/config';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

// connect to mongodb ASAP
mongoose.connect(config.db.connectionString, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to database.'))
  .catch(error => console.log(error));

app.use(helmet);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
