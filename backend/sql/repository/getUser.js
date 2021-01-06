const getUserByEmail = (email, connection) => {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT id FROM workout_user WHERE email = ?"; 
    connection.query(sql, [email], function(err, result) {
      if (err) reject(new Error(err));
      resolve(result);
    });
  });
}

module.exports = getUserByEmail;
