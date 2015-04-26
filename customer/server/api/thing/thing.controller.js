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
    name : 'Ice Cream',
    image : 'assets/images/Bitmap 1@2x.png',
    id: 1,
    price: 4.99
  }, {
    name : 'Iced Coffee',
    image : 'assets/images/Bitmap 2@2x.png',
    id: 2,
    price: 9.99
  }, {
    name : 'Lamb Chops 32Pcs',
    image : 'assets/images/Bitmap 3@2x.png',
    id: 3,
    price: 49.99
  },  {
    name : '1,000 Cans of Chilled Beer',
    image : 'assets/images/Bitmap 4@2x.png',
    id: 4,
    price: 999.99
  }
  ]);
};
