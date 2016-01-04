"use strict";
global.winston = require('winston');

global.db = require('./core/mongoose');

var express = require('express');

winston.level = 'debug';

var app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');

app.locals = {
  assets: require('./assets.json'),
  webpack: require('./webpack.json'),
  static: function (to) {
    return `/static/${to}`;
  }
};

app.use('/static', express.static(`${__dirname}/public`), function (req, res) {
  res.status(404).send('not found');
});

app.get('/*', function (req, res) {
  res.render('app');
});

var server = app.listen(process.env.PORT || 3000, () =>
  winston.debug('server:boot', server.address())
)
