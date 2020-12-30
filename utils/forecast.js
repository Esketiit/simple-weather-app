let axios = require('axios')
const key = require('../key.js')

let forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=${key.weatherstack}&query=${latitude} + ${longitude}`
  axios.get(url)
  .then(resp => {
    if (resp.data.error) {
      // if an error exists, pass the error to the callback function
      // console.log(resp.data.error.info, resp)
      callback(resp.data.error.info, undefined)
    } else {
      // if everything goes well, pass data to callback function
      // console.log(`The temperature is ${resp.data.current.temperature}`)
      console.log("forecast good")
      callback(undefined, resp.data.current.temperature)
    }
  })
  
  .catch(error => {
    // for network errors
    callback("network error", undefined)
  })
}

// test
// forecast(-73.9808, 40.7648, (error, data) => {
//     console.log(error)
//     console.log(data)
// })

module.exports = forecast