var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fh = require('fh-mbaas-api');
var db;
const COLLECTION = 'orders';

var MongoClient = require('mongodb').MongoClient
var url = process.env.FH_MONGODB_CONN_URL || 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongoConnection) {
  if (err){
    return console.error(err);
  }
  console.log("Connected correctly to server");
  db = mongoConnection;
});

function ordersRoute() {
  var orders = new express.Router();
  orders.use(cors());
  orders.use(bodyParser());

  orders.get('/', function(req, res) {
    var collection = db.collection(COLLECTION);
    collection.find().toArray(function(err, results){
      if (err) {
        return res.status(500).json(err);
      }
      return res.json(results);
    });
  });

  orders.post('/', function(req, res) {
    var collection = db.collection(COLLECTION);
    collection.insert([req.body], function(err) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.json(req.body);
    });
  });

  return orders;
}

module.exports = ordersRoute;
