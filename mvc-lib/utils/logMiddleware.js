function logMiddleware(req, res, next) {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
  }
  
  module.exports = logMiddleware;  
// In this function, we're defining a middleware function that takes a req, res, and next argument.
//We're also logging the request method, URL, and timestamp to the console.

