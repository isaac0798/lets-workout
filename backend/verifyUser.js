const getUserByEmail = require('./sql/repository/getUser.js');
const {getConnection} = require('./sql/connect.js');

const verifyUser = async (userCookie, requestId) => {
  if (!userCookie) {
    return;
  }

  const userEmail = userCookie.emails[0].value;
  const userId = getUserId(userEmail);

  return requestId === userId;
}

const getUserId = async (userEmail) => {
  const connection = getConnection();
  const userId = await getUserByEmail(userEmail, connection);

  return userId[0].id;
}

module.exports = {
  verifyUser,
  getUserId
};
