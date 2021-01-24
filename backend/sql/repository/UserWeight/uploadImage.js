const AWS = require('aws-sdk');
const dateformat = require('dateformat');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

const uploadImage = (user, file) => {
  const actualDate = new Date();
  const formattedDate = dateformat(actualDate, "yyyy-mm-dd");
  const id = user.id
  console.log("params", file);
  s3.upload({
    Bucket: 'lets-workout',
    Key: `${id}/${formattedDate}/photo.jpeg`,
    Body: file.buffer
  }, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`); 
  });
}

module.exports = uploadImage;
