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
  res.json([
  {
    name : 'Ice Creme',
    image : 'assets/images/Bitmap 1@2x.png',
    id: 1,
    price: 4.99
  }, {
    name : 'Ice Coffee',
    image : 'assets/images/Bitmap 2@2x.png',
    id: 2,
    price: 9.99
  }, {
    name : 'Roast Chicken',
    image : 'assets/images/Bitmap 3@2x.png',
    id: 3,
    price: 149.99
  },  {
    name : 'Chilled Beer',
    image : 'assets/images/Bitmap 4@2x.png',
    id: 4,
    price: 999.99
  }
  ]);
};
