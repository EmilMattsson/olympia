import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import helmet from 'helmet';

import config from './config/config';
import { LOGIN_ROUTER, ROUTER, USER_ROUTER } from './routes';
import { validateUserEmailAndPassword } from './middleware/validator';
import { errorLogger, errorHandler } from './middleware/errorHandler';

const APP = express();

// connect to mongodb ASAP
mongoose
  .connect(config.db.connectionString, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to database.'))
  .catch(err => console.error(err));

// general config
APP.use(helmet());
APP.use(logger('dev'));
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieParser());
APP.use(express.static(path.join(__dirname, 'public')));

// routes config
APP.use('/', ROUTER);
APP.use('/login', validateUserEmailAndPassword, LOGIN_ROUTER);
APP.use('/users', USER_ROUTER);

// error middleware
APP.use(errorLogger);
APP.use(errorHandler);

export default APP;
