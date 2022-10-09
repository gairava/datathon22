// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.lookups.v1.phoneNumbers('(510) 867-5310')
                 .fetch({countryCode: 'US'})
                 .then(phone_number => console.log(phone_number.phoneNumber));
