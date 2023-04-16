const path = require('path');
const pug = require('pug');

function loadView(viewName, data = {}) {
  const viewPath = path.join(__dirname, '..', 'views', `${viewName}.pug`);
  return pug.renderFile(viewPath, data);
}

module.exports = loadView;
