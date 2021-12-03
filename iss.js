const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', function(error, response, body) {
    if (error) {
      body = null;
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  let obj = {};
  request(`https://api.freegeoip.app/json/${ip}?apikey=0d7b6da0-53c7-11ec-875e-f919aa983175`, function(error, response, body) {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    obj['latitude'] = JSON.parse(body).latitude;
    obj['longitude'] = JSON.parse(body).longitude;
 
    callback(null, obj);
  });
};

const fetchISSFlyOverTimes = function (coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, function (error, response, body) {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
 
    callback(null, JSON.parse(body).response);
  });
};

// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };