const dateFormat = require('dateformat');
const {getConnection} = require('../../connect.js'); 
const {getUserId} = require('../../../verifyUser.js');

const insertWeight = async (user, reqParams) => {
  const userEmail = user.emails[0].value;
  if (!verifyWeightParams(reqParams)) {
    return "Invalid parameters";
  }

  if (!user) {
    return "Invalid user";
  }

  const userId = await getUserId(userEmail);
  const connection = getConnection();

  const dailyWeight = await checkForDailyWeight(userEmail, userId, connection);

  if (dailyWeight) {
    updateDailyWeight(reqParams, userId, connection);  

    return true;
  }

  const sql = "INSERT INTO user_weight (user_id, weight, date, unit) VALUES (?)";
  connection.query(sql, [[
    userId,
    reqParams.weight,
    reqParams.date,
    reqParams.unit,
    ]], function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });

  return true;
}

const updateDailyWeight = ({unit, date, weight}, userId, connection) => {
  return new Promise(function(resolve, reject) {
    const sql = `UPDATE user_weight SET unit='${unit}', weight=${weight} WHERE date='${date}' AND user_id=${userId}`;
    connection.query(sql, function(err, result) {
      if (err) reject(new Error(err));
      console.log(result);
      resolve(result);
    });
  });
}

const checkForDailyWeight = (userEmail, userId, connection) => {
  return new Promise(function(resolve, reject) {
    const todayDate = getTodaysDate();
    const sql = `SELECT * from user_weight WHERE date='${todayDate}' AND user_id=${userId}`;
    connection.query(sql, function(err, result) {
      if (err) reject(new Error(err));
      resolve(result.length);
    });
  });  
}

const getTodaysDate = () => {
  const today = new Date();

  return dateFormat(today, "yyyy-mm-dd");
}


//make into seperate utility function/file
const verifyWeightParams = (reqParams) => {
  console.log("reqParams", reqParams);
  const neededKeys = ['weight','unit','date'];
  
  return neededKeys.every(key => Object.keys(reqParams).includes(key));
}

module.exports = insertWeight;
