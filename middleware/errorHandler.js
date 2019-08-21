import { INTERNAL_SERVER_ERROR } from '../models/httpStatusCodes';

export const errorLogger = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(INTERNAL_SERVER_ERROR).json({ error: err });
};