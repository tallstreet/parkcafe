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
    id: 1
  }, {
    name : 'Ice Coffee',
    image : 'assets/images/Bitmap 2@2x.png',
    id: 2
  }, {
    name : 'Roast Chicken',
    image : 'assets/images/Bitmap 3@2x.png',
    id: 3
  },  {
    name : 'Chilled Beer',
    image : 'assets/images/Bitmap 4@2x.png',
    id: 4
  }
  ]);
};
