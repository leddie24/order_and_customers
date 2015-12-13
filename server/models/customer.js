var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new Schema({
   name: String,
   dateCreated: {type:Date, default: new Date}
});

var Customer = mongoose.model('Customer', CustomerSchema);