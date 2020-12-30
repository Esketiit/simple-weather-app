const axios = require('axios')
const key = require('../key.js')

// geocode() takes the address/name of a place and returns either an error message or location data to a callback function
// this allows geocode() to be flexiable bacause its functionality can be changed depending on the callback it gets
const geocode = (address, callback) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${key.maps}&limit=1`
  axios.get(url)
  .then(resp => {
    // console.log("geocode good")
    let location = resp.data.features[0].place_name
    let long = resp.data.features[0].center[0]
    let lat = resp.data.features[0].center[1]

    callback(undefined, {
      latitude: lat,
      longitude: long,
      location: location
    })
  })
  .catch(error => {
    callback("Something went wrong: either there was a network error or the place you entered cannot be found", undefined)
  })
}

// geocode('New York', (error, data) => {
//   console.log(error)
//   console.log(data)
// })

module.exports = geocode