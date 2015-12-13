var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
   showAll: function(req, res) {
      console.log("Show All Orders");
      Order.find({}).populate('_customer').exec(function (err, orders) {
         if (err) {
            console.log("Error getting orders")
         } else {
            console.log(orders);
            res.json(orders);
         }
      });
   },
   addNewOrder: function(req, res) {
      console.log("new order info", req.body);
      var order = new Order({
         _customer: req.body.customer._id,
         product: req.body.product.name,
         quantity: req.body.quantity
      });
      order.save(function(err) {
         if (err) {
            console.log("Error adding order");
            res.status(400).send('error adding order');
         } else {
            console.log("Added new order", order);
            res.status(200).send('added new order');
         }
      });
   }
}