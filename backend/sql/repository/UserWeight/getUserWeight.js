const {getConnection} = require('../../connect.js');

const getUserWeight = (userId) => {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM user_weight WHERE user_id = ?";
    const connection = getConnection();
    connection.query(sql, [userId], function(err, result) {
      if (err) reject(new Error(err));
      resolve(result);
    });
  });  
}

module.exports = getUserWeight;
