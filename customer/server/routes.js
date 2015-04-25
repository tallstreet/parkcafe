/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '117333',
  key: '964888bb18b03d72d788',
  secret: '427d14017061b603ec60'
});

var braintree = require('braintree');
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "kptk4xhphjzwm38x",
  publicKey: "vsm3nrfsz89r4x38",
  privateKey: "0d6e2c6ab8a3daca53b2a9ddf92847a1"
});

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  app.get("/client_token", function (req, res) {
    console.log("Braintree code");
    gateway.clientToken.generate({
      // customerId: '11111'
    }, function (err, response) {
      console.log(response);
      res.send(response);
    });
  });

  app.post("/purchases", function (req, res) {
    var nonce = req.body.payment_method_nonce;
    // Use payment method nonce here

    gateway.transaction.sale({
      amount: '2.00',
      paymentMethodNonce: nonce,
    }, function (err, result) {
      console.log('Transaction ' + result + ' error code ' + err);
      res.send(result);
    });
  });



  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.get("/new", function(req, res) {
    pusher.trigger('presence-orders', 'new', {
      "loc": [req.body.lat, req.body.lon],
      "order": req.body.order,
      "id": req.body.order_num
    });
    res.send("Success");
  });


  app.post("/pusher/auth", function(req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var presenceData = {};
    var auth = pusher.authenticate( socketId, channel, presenceData );
    res.send( auth );
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
