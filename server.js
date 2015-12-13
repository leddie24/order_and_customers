var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js')(app);

var server = app.listen(8000, function() {
   console.log("Live on 8000");
})