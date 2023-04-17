const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const { authMiddleware, logMiddleware, errorHandlerMiddleware } = require('./utils');

// Create the express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(logMiddleware);
app.use(errorHandlerMiddleware);

// Load routes
const indexRoutes = require('./routes/index');

// Configure routes
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
