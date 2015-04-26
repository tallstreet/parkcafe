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
    price: 1.99
  }, {
    name : 'Iced Coffee',
    image : 'assets/images/Bitmap 2@2x.png',
    id: 2,
    price: 2.59
  }, {
    name : 'Lamb Chops',
    image : 'assets/images/Bitmap 3@2x.png',
    id: 3,
    price: 3.99
  },  {
    name : 'Chilled Beer',
    image : 'assets/images/Bitmap 4@2x.png',
    id: 4,
    price: 4.99
  }
  ]);
};
