/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([ {
    name : 'Hot Coffee',
    image : 'assets/images/coffee.jpg',
    id: 2,
    price: 2.59
  }, {
    name : 'Ice Cream',
    image : 'assets/images/icecream.jpg',
    id: 1,
    price: 1.99
  },{
    name : 'Lamb Chops',
    image : 'assets/images/lambchops.jpg',
    id: 3,
    price: 3.99
  },  {
    name : 'Chilled Beer',
    image : 'assets/images/beer.jpg',
    id: 4,
    price: 4.99
  }
  ]);
};
