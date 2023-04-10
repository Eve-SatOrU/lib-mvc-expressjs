const path = require('path');

function loadController(controllerName) {
  const controllerPath = path.join(__dirname, '..', 'controllers', `${controllerName}.controller.js`);
  return require(controllerPath);
}

module.exports = loadController;