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

var counter = 0;

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
      res.send(response.clientToken);
    });
  });

  app.post("/purchases", function (req, res) {
    var nonce = req.body.payment_method_nonce;
    gateway.transaction.sale({
      amount: req.body.amount,
      paymentMethodNonce: nonce
/*    // Marketplace (US-only at the moment) needed for escrow
      options: {
        submitForSettlement: true,
        holdInEscrow: true
      }
*/
    }, function (err, result) {
      console.log('Transaction ' + result + ' error code ' + err);
      console.log(result);
      if (result.success) {
        var queue = 'presence-' + req.body.order + '-orders';
        pusher.trigger(queue, 'new', {
          "loc": [req.body.lat, req.body.lon],
          "amount": req.body.amount,
          "id": result.transaction.id
        });
        res.redirect('/status/' + result.transaction.id);
      } else {
        res.send(result);
      }
    });
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.get("/new", function(req, res) {
    pusher.trigger('presence-icecream-orders', 'new', {
      "loc": [51.5093-0.0003+Math.random()*0.0006, -0.06-0.006+Math.random()*0.012],
      "amount": '1.79',
      "id": counter++
    });
    res.send("Success");
  });



  app.post("/order", function(req, res) {
    pusher.trigger('presence-icecream-orders', 'new', {
      "loc": [req.body.lat, req.body.lon],
      "amount": '1.79',
      "id": req.body.id
    });
    res.send("Success");
  });

  app.post("/deliver", function(req, res) {
    pusher.trigger('presence-icecream-orders', 'delivered', {
      "id": req.body.id
    });
    res.send("Success");
  });

  app.post("/pusher/auth", function(req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var presenceData = {
      "user_id": 1
    };
    var auth = pusher.authenticate( socketId, channel, presenceData );
    res.send( auth );
  });


  // All other routes should redirect to the index.html
  app.route('/supplier*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/supplier.html');
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
