'use strict';
module.exports = function (req, res, next) {

  const classNames = [
    'home-slide-01',
    'home-slide-02'
  ];

  let randomClassName = Math.floor(Math.random() * classNames.length);

  res.locals.slideClassName = classNames[randomClassName];
  next();
};


