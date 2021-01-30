const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'})
const dateformat = require('dateformat');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

const getImages = async (user) => {
  const listParams = {
    Bucket: 'lets-workout',
    Prefix: `${user.id}/`
  } 

  const data = await s3.listObjects(listParams).promise();
  const keys = data.Contents.map(content => content.Key);
  console.log(keys);
  return await getObjects(keys); 
}

const getObjects = async (keys) => {
  var response = [];
  await Promise.all(keys.map(async (key) => {
    const object = await s3.getObject({
      Bucket: 'lets-workout',
      Key: key
    }).promise();

    response.push(object);
  }));

  return response;
}

module.exports = getImages
