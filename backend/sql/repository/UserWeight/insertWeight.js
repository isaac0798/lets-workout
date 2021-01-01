const {getConnection} = require('../../connect.js'); 
const {getUserId} = require('../../../verifyUser.js');

const insertWeight = async (user, reqParams) => {
  if (!verifyWeightParams(reqParams)) {
    return "Invalid parameters";
  }

  if (!user) {
    return "Invalid user";
  }

  const userId = await getUserId(user.emails[0].value);
  const connection = getConnection();
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


//make into seperate utility function/file
const verifyWeightParams = (reqParams) => {
  console.log("reqParams", reqParams);
  const neededKeys = ['weight','unit','date'];
  
  return neededKeys.every(key => Object.keys(reqParams).includes(key));
}

module.exports = insertWeight;
