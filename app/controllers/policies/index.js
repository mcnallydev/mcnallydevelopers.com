/*jshint esversion: 6 */
"use strict";

// Fixme: Resolve the middleware import automatically
const dataMiddleware = require('../../middleware/data');

module.exports = function (router) {
  router.get('/', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/policies';
    res.render('policies/index');
  });

  router.get('/privacy', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/policies/privacy';
    res.render('policies/privacy');
  });

  router.get('/terms', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/policies/terms';
    res.render('policies/terms');
  });


};
