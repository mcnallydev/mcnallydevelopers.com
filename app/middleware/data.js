const main = require('../../config/data/main');
const footer = require('../../config/data/footer');

module.exports = function (req, res, next) {
  res.locals.app = res.locals.app || {};
  // main
  if (!res.locals.app.hasOwnProperty('main')) {
    res.locals.app.main = main;
  }

  // footer
  if (!res.locals.app.hasOwnProperty('footer')) {
    res.locals.app.footer = footer;
  }
  next();
}
