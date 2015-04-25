var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '117333',
  key: '964888bb18b03d72d788',
  secret: '427d14017061b603ec60'
});

pusher.trigger('orders', 'new', {
  "loc": [51.508951065356584, -0.06087561664582353],
  "order": "1 x Coffee - £20",
  "id": 1
});
