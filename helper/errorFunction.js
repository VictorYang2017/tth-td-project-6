const runErr = (errOptions, res, next) => {
  const err = new Error(errOptions.message);
  err.status = errOptions.statusCode;
  res.status(errOptions.statusCode);
  return next(err);
};

module.exports = runErr;
