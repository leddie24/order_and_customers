var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
   showAll: function(req, res) {
      console.log("Show All Customers");
      Customer.find({}).exec(function (err, customers) {
         if (err) {
            console.log("Error getting customers", err);
         } else {
            res.json(customers);
         }
      })
   },
   addCustomer: function(req, res) {
      console.log("Add Customer");
      console.log(req.body);
      Customer.find({name: req.body.name}, function(err, customer) {
         if (err) {
            console.log("Error", err)
         } else {
            if (customer.length) {
               console.log("Customer " + req.body.name + " already exists");
               res.status(409).send("Customer " + req.body.name + " already exists");
            } else {
                var customer = new Customer({
                  name: req.body.name
               });
               customer.save(function(err) {
                  if (err) {
                     console.log("Error adding new customer");
                  } else {
                     console.log("Added new customer", customer.name);
                  }
               });
               res.send(customer);
            }
         }
      });
   },
   removeCustomer: function(req, res) {
      console.log("Delete user id", req.body._id);
      Customer.findByIdAndRemove(req.body._id, function(err) {
         if (err) {
            console.log("Error removing person", err);
         } else {
            res.status(200);
         }
      });
   }
}