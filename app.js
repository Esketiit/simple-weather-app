const axios = require('axios')
const key = require('./key.js')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

let address = process.argv[2]
if(!address) {
  console.log("please provide an address")
} else {
  // because geocode() and forecast() take callback functions, they can be chained together
  // {latitude, longitude, location} = {} <== this argument destructures an object from axios if it exists,
  // and has a default of value of {} instead of undefined. trying to destruture undefined throws an error
  geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return error
    }

    // console.log(latitude, longitude, location)
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log(error)
        return error
      }

      console.log(location)
      console.log(forecastData)
    })
  })
}

