"use strict";
global.winston = require('winston');
var express = require('express');

winston.level = 'debug';

var app = express();

app.use('/static', express.static('./public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, () =>
  winston.debug('server:boot', server.address())
)
