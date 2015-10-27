var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fh = require('fh-mbaas-api');
const COLLECTION = 'orders';

function ordersRoute() {
  var orders = new express.Router();
  orders.use(cors());
  orders.use(bodyParser());

  orders.get('/', function(req, res) {
    return fh.db({
      "act": "list",
      "type": COLLECTION
    }, function (err, data) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.json(data);
    });
  });

  orders.post('/', function(req, res) {
    return fh.db({
      "act": "create",
      "type": COLLECTION,
      "fields": req.body
    }, function (err) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.json(req.body);
    });
  });

  return orders;
}

module.exports = ordersRoute;
