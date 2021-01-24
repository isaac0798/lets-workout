const express = require('express')
const {verifyUser, getUserId} = require('../verifyUser.js'); 
const insertWeight = require('../sql/repository/UserWeight/insertWeight.js');
const getUserWeight = require('../sql/repository/UserWeight/getUserWeight.js');
const uploadImage = require('../sql/repository/UserWeight/uploadImage.js');
const userWeightController = express.Router();
const multer = require('multer');
const upload = multer();
userWeightController.use(express.json());

userWeightController.get('/', function(req, res) {
  res.send('hello from the user weight controller');
});

userWeightController.get('/:id', async function(req, res) {
  const verified = await verifyUser(req.cookies.lets_workout_user, parseInt(req.params.id));

  if (!verified) {
    res.send("User not verified to see this info");
    return;
  }

  const userWeights = await getUserWeight(req.params.id);
  res.send(userWeights);
});

userWeightController.post('/', function(req, res) {
  if (!req.body) {
    res.send("invalid request");
  }
  console.log(req.cookies.lets_workout_user);

  const response = insertWeight(req.cookies.lets_workout_user, req.body);  
  res.send(response);
});

userWeightController.post('/image', upload.single('photo'), function(req, res) {
  if (!req.body) {
    res.send("invalid request");
  }

  const response = uploadImage(req.cookies.lets_workout_user, req.file);  
  res.send(response);
});

module.exports = userWeightController;
