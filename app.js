const express = require('express');
const path = require('path');
const app = express();

// Import homeRoutes and error handlers
const homeRoute = require('./routes/homeRoute');
const {pageNotFound, customErrorHandler} = require('./middleware/errorHandlers');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Setting static files and send it to the client side
app.use('/static', express.static(path.join(__dirname, 'public')));

/* 
  Routes
*/
//Home route
app.use('/', homeRoute);

/*
  Error handlers
*/
// 404 error
app.use(pageNotFound);
// Custom error handler
app.use(customErrorHandler);

const PORT = "3000";

app.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
  console.log(`Application: http://localhost:${PORT}`);
});
