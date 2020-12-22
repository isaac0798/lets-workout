const translateGoogleProfile = require('../../translators/translateGoogleProfile.js');

const saveUser = (profile, connection) => {
  const translatedProfile = translateGoogleProfile(profile); 
  const values = [
    translatedProfile.display_name,
    translatedProfile.first_name,
    translatedProfile.last_name,
    translatedProfile.email,
    translatedProfile.profile_pic_url
  ];
  const sql = "INSERT INTO workout_user (display_name, first_name, last_name, email, profile_pic_url) VALUES (?)";

  connection.query(sql, [values],function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

module.exports = saveUser;
