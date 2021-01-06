const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jamal1998"
});

var dbConnected = false;
con.connect(function(err) {
    if (err) throw err;
    dbConnected = true;
    con.query("use lets_workout_db");
});

const getConnection = () => {
  if (!dbConnected) {
    return;
  }

  return con;
}

module.exports = {
  dbConnected,
  getConnection
};
