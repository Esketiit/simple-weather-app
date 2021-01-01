let axios = require('axios')
const key = require('../key.js')

let forecast = (latitude, longitude, callback) => {
  // console.log(latitude, longitude)
  let url = `http://api.weatherstack.com/current?access_key=${key.weatherstack}&query=${latitude} + ${longitude}`
  axios.get(url)
  .then(({data}) => {
    if (data.error) {
      // if an error exists, pass the error to the callback function
      // console.log(resp.data.error.info, resp)
      callback(data.error.info, undefined)
    } else {
      // if everything goes well, pass data to callback function
      // console.log("forecast good")
      // console.log(data.current.temperature)
      callback(undefined, data.current.temperature)
    }
  })
  .catch(error => {
    // for network errors
    callback(error, undefined)
  })
}

// test
// forecast(-73.9808, 40.7648, (error, data) => {
//     console.log(error)
//     console.log(data, "test")
// })

module.exports = forecast