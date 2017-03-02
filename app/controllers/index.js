/*jshint esversion: 6 */
"use strict";

const dataMiddleware = require('../middleware/data');

module.exports = function (router) {
  router.get('/', dataMiddleware, (req, res) => {
    res.render('index');
  });

  // locales
  router.get('/setLocale/:locale', (req, res) => {
    let options = {
      expires: new Date(Date.now() + 900000)
    };
    res.cookie('locale', req.params.locale, options);
    res.redirect('/');
  });
};
