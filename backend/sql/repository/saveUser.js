const translateGoogleProfile = require('../../translators/translateGoogleProfile.js');

const saveUser = async (profile, connection) => {
  const translatedProfile = translateGoogleProfile(profile); 
  const values = [
    translatedProfile.display_name,
    translatedProfile.first_name,
    translatedProfile.last_name,
    translatedProfile.email,
    translatedProfile.profile_pic_url
  ];
  const sql = "INSERT INTO workout_user (display_name, first_name, last_name, email, profile_pic_url) VALUES (?)";
  checkIfUserExists(translatedProfile.email, connection).then((results) => {
    if (results.length === 0) {
      connection.query(sql, [values],function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    }
  });

};

const checkIfUserExists = (userEmail, connection) => {
  return new Promise(function(resolve, reject) {
    const sql = `SELECT * from workout_user WHERE email='${userEmail}'`;
    connection.query(sql, function(err, result) {
      if (err) reject(new Error(err));
      resolve(result);
    });
  });
}

module.exports = saveUser;
