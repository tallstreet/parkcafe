/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

<<<<<<< HEAD

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '117333',
  key: '964888bb18b03d72d788',
  secret: '427d14017061b603ec60'
=======
var braintree = require('braintree');
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "kptk4xhphjzwm38x",
  publicKey: "vsm3nrfsz89r4x38",
  privateKey: "0d6e2c6ab8a3daca53b2a9ddf92847a1"
>>>>>>> 53bbfc37080de734c0c1e496cd65f192ec5fb900
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

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.get("/new", function(req, res) {
    pusher.trigger('presence-orders', 'new', {
      "loc": [51.508951065356584, -0.06087561664582353],
      "order": "1 x Coffee - £20",
      "id": 1
    });
    res.send("Success");
  });


  app.post("/pusher/auth", function(req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var presenceData = {
      user_id: "supplier",
      user_info: {
        name: "John Smith"
      }
    };
    var auth = pusher.authenticate( socketId, channel, presenceData );
    res.send( auth );
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
