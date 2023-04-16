const loadModel = require('./utils/loadModel');
const loadView = require('./utils/loadView');
const loadController = require('./utils/loadController');
const loadAllModels = require('./mvc-lib/controllers/utils/loadAllModels');
const authMiddleware = require('./utils/authMiddleware');
const logMiddleware = require('./utils/logMiddleware');
const errorHandlerMiddleware = require('./utils/errorHandlerMiddleware');

module.exports = {
  loadModel,
  loadView,
  loadController,
  loadAllModels,
  authMiddleware,
  logMiddleware,
  errorHandlerMiddleware
};