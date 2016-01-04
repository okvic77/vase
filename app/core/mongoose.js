var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO || process.env.MONGOLAB_URI);

var db = module.export = {};

db.user = mongoose.model('User', {
  name: String
});

//var Cat = mongoose.model('Cat', { name: String });
