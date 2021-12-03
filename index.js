const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   return ip;
// });

// fetchCoordsByIP('142.114.108.236', (error, data) => {

// });

fetchISSFlyOverTimes({ latitude: 44.1011, longitude: -77.5729 }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  console.log(data);
});



