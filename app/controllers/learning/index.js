/*jshint esversion: 6 */
"use strict";

const dataMiddleware = require('../../middleware/data');

module.exports = function (router) {
  router.get('/', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/learning';
    res.render('learning/index');
  });
};
