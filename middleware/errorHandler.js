export const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

export const handleError = (err, req, res, next) => {
  res.status(500).send('Something broke');
  next(err);
};