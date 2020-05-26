const aws = require('aws-sdk');
const command = require('minimist')(process.argv.slice(2))._[0]

aws.config = {
  region: 'us-west-2',
  apiVersions: {
    ec2: '2016-11-15'
  }
};
const ec2 = new aws.EC2();

const message = (err, data) => {
  if (err) { console.log(`Error: ${err.message}`); }
  else if (data) { console.log(`Success: ${JSON.stringify(data)}`); }
};

module.exports = { command, message }


// const aws = require('aws-sdk');
// const command = require('minimist')(process.argv.slice(2))._[0]

// aws.config = {
//   region: 'us-west-2',
//   apiVersions: {
//     ec2: '2016-11-15'
//   }
// };
// const ec2 = new aws.EC2();


// function getAwsSecret() {
//   return ec2.describeKeyPairs().promise();
// }

// async function getAwsSecretAsync () {
//   try {
//     const response = await getAwsSecret();
//     return response;
//   } catch (error) {
//     console.error('Error occurred while retrieving AWS secret');
//     console.error(error);
//   }
// }

// async function asyncExample () {
//   const secret = await getAwsSecretAsync();
//   console.debug(secret);
// }

// asyncExample();
