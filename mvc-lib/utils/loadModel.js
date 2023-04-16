const path = require('path');

function loadModel(modelName) {
  const modelPath = path.join(__dirname, '..', 'models', `${modelName}.model.js`);
  return require(modelPath);
}

module.exports = loadModel;