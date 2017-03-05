'use strict';
module.exports = function (req, res, next) {
  var locale = req.cookies && req.cookies.locale;
  //Set the locality for this response. The template will pick the appropriate bundle
  res.locals.locale = locale;

  res.locals.isProduction = (process.env.NODE_ENV === 'production');

  next();
};
