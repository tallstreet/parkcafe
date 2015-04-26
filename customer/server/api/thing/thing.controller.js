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
  id : 'icecream',
  image : 'assets/images/Bitmap 1@2x.png'
  }, {
  name : 'Coffee',
  id : 'coffee',
  image : 'assets/images/Bitmap 2@2x.png'
  }, {
  name : 'Roast Chicken',
  id : 'chicken',
  image : 'assets/images/Bitmap 3@2x.png'
  },  {
  name : 'Chilled Beer',
  id : 'beer',
  image : 'assets/images/Bitmap 4@2x.png'
  }
  ]);
};
