/*jshint esversion: 6 */
"use strict";

// Fixme: Resolve the middleware import automatically
const dataMiddleware = require('../../middleware/data');

module.exports = function (router) {
  router.get('/', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/blog';
    res.render('blog/index');
  });
};
