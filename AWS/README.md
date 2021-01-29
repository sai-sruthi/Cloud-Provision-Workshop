Provison Workshop
===============

### Before you start

`git clone https://github.ncsu.edu/stallur2/HW0-DevOps.git`

##### Using package manager, install dependencies

`cd HW0-DevOps/AWS` then `npm install`

##### Set your token

```
# Mac/Linux
export AWS_ACCESS_KEY="xxx"
export AWS_SECRET_KEY="xxx"
# Windows
setx AWS_ACCESS_KEY="xxx"
setx AWS_SECRET_KEY="xxx"x
```

##### Run the node program


`node CreateKeyPair.js`

If everything is created correctly you will see a key pair with keyname "stallur2" being created

`node CreateInstance.js`

If everything is set correctly, you should see output like the following:

```
Created instance 'Instance id'
Success, DNS "xxxxx.us-east-2.compute.amazonaws.com"
IP Address "IP Address"
```

#### Step by Step Guide

    * 1. The first step is to create a AWS account and obtain both access and secret key. 

    * 2. Set the keys as environment variables.

    * 3. Create a key value pair for the region using the CreateKeyPair javascript file.

    * 4. After setting up everything we can create an EC2 Instance and retrieve the IP address using the CreateInstance javascript   file. 

