const express = require('express')
const userWeightController = express.Router();

userWeightController.get('/', function(req, res) {
  res.send('hello from the user weight controller');
});
userWeightController.get('/:id', function(req, res) {
  res.send(`Getting weight data for user ${req.params.id}`);
});

module.exports = userWeightController;
