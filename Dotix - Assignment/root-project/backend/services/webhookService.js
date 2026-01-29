const axios = require('axios');

exports.send = (job) => {
  axios.post('https://webhook.site/YOUR-ID', job);
};