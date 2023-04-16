function errorHandlerMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  }
  
  module.exports = errorHandlerMiddleware;  
//In this function,we're defining a middleware function that takes an err, req, res,and next argument. 
//We're also logging the error stack trace to the console and returning500 Internal Server Error response.

