// Error handler for page not found (404)
const pageNotFound = (req, res, next) => {
  const err = new Error(
    "Oops, looks like the page you are looking for does not exist!"
  );
  err.status = 404;
  return next(err);
};

// Custom error handler
const customErrorHandler = (err, req, res, next) => {
  const errorMsg = err.message;
  const errorStatus = err.status;
  const errorStack = err.stack;

  if (errorStatus === 404) {
    console.error(`PROBLEM => [ERROR MESSAGE: ${errorMsg}, STATUS CODE: ${errorStatus}!]`)
    console.error(`STACK TRACE => ${errorStack}`);
    res.status(errorStatus);
    return res.render("page-not-found", { errorMsg, errorStatus });
  }

  err.message = "Oops, server error!";
  err.status = 500;
  res.status(500);
  console.error(`PROBLEM => [ERROR MESSAGE: ${errorMsg}, STATUS CODE: ${errorStatus}!]`)
  console.error(`STACK TRACE => ${errorStack}`);

  return res.render("error", { errorMsg, errorStatus, errorStack });
};

module.exports = {
  pageNotFound,
  customErrorHandler,
};
