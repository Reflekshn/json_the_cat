'use strict';

const request = require('request');
const args = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  if (error) {
    console.log('Error: ', error);
    return null;
  }

  const data = JSON.parse(body);

  if (!data.length) {
    console.log('Error: Unable to find the requested breed');
    return null;
  }

  console.log(data[0].description);

  return 1;
});
