const pageNotFound = (req,res,next) => {
    const err = new Error('Oops, looks like the page you are looking for does not exist!');
    err.status = 404;
    res.status(404);
    return next(err);
}

const customErrorHandler = (err,req,res,next) => {
    err.message = err.message || 'Oops, looks like there is an server error!';
    err.status = err.status || 500;
    res.status(err.status || 500);
    console.error(`PROBLEM => [ERROR MESSAGE: ${err.message}, STATUS CODE: ${err.status}!]`)
    console.error(`STACK TRACE => ${err.stack}`);

    return res.render('error',{err});

}

module.exports = {
    pageNotFound,
    customErrorHandler
};