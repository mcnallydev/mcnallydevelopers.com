const dataMiddleware = require('../middleware/data');

module.exports = function (router) {
  router.get('/', dataMiddleware, (req, res) => {
    res.render('index');
  });

  // locales
  router.get('/setLocale/:locale', (req, res) => {
    res.cookie('locale', req.params.locale);
    res.redirect('/');
  });
};
