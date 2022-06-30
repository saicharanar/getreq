const https = require('https');

const responseCb = (cb) => (response) => {
  let result = '';
  response.on('data', (chunk) => {
    result += chunk;
  });

  response.on('end', () => {
    cb(result);
  });
};

const getRequest = (options, cb) => {
  https.get(options, responseCb(cb));
};

module.exports = { getRequest };
