import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import helmet from 'helmet';
import usersRouter from './routes/userroute';

import config from './config/config';

import { ROUTER } from './routes';

const APP = express();

// connect to mongodb ASAP
mongoose
  .connect(config.db.connectionString, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to database.'))
  .catch(error => console.log(error));

APP.use(helmet());
APP.use(logger('dev'));
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieParser());
APP.use(express.static(path.join(__dirname, 'public')));

APP.use('/', ROUTER);
APP.use('/users', usersRouter);

export default APP;
