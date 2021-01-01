const express = require('express')
const {verifyUser, getUserId} = require('../verifyUser.js'); 
const insertWeight = require('../sql/repository/UserWeight/insertWeight.js');
const userWeightController = express.Router();
userWeightController.use(express.json());

userWeightController.get('/', function(req, res) {
  res.send('hello from the user weight controller');
});

userWeightController.get('/:id', async function(req, res) {
  const verified = await verifyUser(req.cookies.lets_workout_user, parseInt(req.params.id));

  if (!verified) {
    res.send("User not verified to see this info");
  }

  res.send(`Getting weight data for user ${req.params.id}`);
});

userWeightController.post('/', function(req, res) {
  if (!req.body) {
    res.send("invalid request");
  }

  const response = insertWeight(req.cookies.lets_workout_user, req.body);  
  res.send(response);
});

module.exports = userWeightController;
