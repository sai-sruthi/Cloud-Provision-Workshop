// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

var aws_access_key = process.env.AWS_ACCESS_KEY
var aws_secret_key = process.env.AWS_SECRET_KEY

// Set the region 
AWS.config.region = 'us-east-2';
AWS.config.update({accessKeyId: aws_access_key, secretAccessKey: aws_secret_key});

// Create EC2 service object
var ec2 = new AWS.EC2();

var params = {
   KeyName: 'stallur2'
};

// Create the key pair
// ec2.createKeyPair(params, function(err, data) {
//    if (err) {
//       console.log("Error", err);
//    } else {
//       console.log(JSON.stringify(data));
//    }
// });

// Describe the key pair
ec2.describeKeyPairs(function(err, data) {
    if (err) {
       console.log("Error", err);
    } else {
       console.log("Success", JSON.stringify(data.KeyPairs));
    }
 });