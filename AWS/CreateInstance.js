var AWS = require('aws-sdk');
var fs = require("fs");

var aws_access_key = process.env.AWS_ACCESS_KEY
var aws_secret_key = process.env.AWS_SECRET_KEY

AWS.config.region = 'us-east-2';
AWS.config.update({accessKeyId: aws_access_key, secretAccessKey: aws_secret_key});

var ec2 = new AWS.EC2();

var instanceParams = {
    ImageId: 'ami-02ccb28830b645a41',
    InstanceType: 't2.micro',
    KeyName: 'stallur2',
    MinCount: 1,
    MaxCount: 1
 };
 
 //Create a EC2 service Instance
//  ec2.runInstances(instanceParams, function(err, data) {
//      if (err) { console.log("Could not create instance", err); return; }
//      //console.log(data);
//      instanceId = data.Instances[0].InstanceId;
//      console.log("Created instance", instanceId);

//    });

var describeParams = {
DryRun: false,
InstanceIds: [
    "i-08716125b1fb0d603"
]
};

// Describe a EC2 service Instance
// ec2.describeInstances(describeParams, function(err, data) {
// if (err) { console.log("Could not describe instance", err); return; }
// console.log("Success, DNS", JSON.stringify(data.Reservations[0].Instances[0].PublicDnsName));
// console.log("IP Address", JSON.stringify(data.Reservations[0].Instances[0].PublicIpAddress));

// });