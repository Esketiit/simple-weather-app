const axios = require('axios')
const key = require('./key.js')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

let address = process.argv[2]
if(!address) {
  console.log("please provide an address")
} else {
  // because geocode() and forecast() take callback functions, they can be chained together
  geocode(address, (error, data) => {
    if (error) {
      return error
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return error
      }

      console.log(data.location)
      console.log(forecastData)
    })
  })
}

