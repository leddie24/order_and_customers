var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
   _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
   product: String,
   quantity: Number,
   dateCreated: {type:Date, default: new Date}
});

var Order = mongoose.model('Order', OrderSchema);