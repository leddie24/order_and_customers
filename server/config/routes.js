var ordersCtrl = require('../controllers/ordersController.js');
var customersCtrl = require('../controllers/customersController.js');

var bodyParser = require('body-parser');

module.exports = function(app) {
   // for parsing application/json
   app.use(bodyParser.json());

   // for parsing application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: true }));

   app.get('/getcustomers', function (req, res) {
      customersCtrl.showAll(req, res);
   });

   app.post('/addnewcustomer', function (req, res) {
      console.log(req.body);
      customersCtrl.addCustomer(req, res);
   })

   app.post('/removecustomer', function (req, res) {
      console.log(req.body);
      customersCtrl.removeCustomer(req, res);
   });

   app.get('/orders', function (req, res) {
      ordersCtrl.showAll(req, res);
   });

   app.post('/addneworder', function (req, res) {
      ordersCtrl.addNewOrder(req, res);
   });
}