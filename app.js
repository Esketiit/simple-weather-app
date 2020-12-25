const request = require('request')
const axios = require('axios')
const key = require('./key.js')

// good url
// let url = `http://api.weatherstack.com/current?access_key=68feb0238fd5bf731167e86146b2004e&query=New%20York`

// bad url
// let url = `http://api.weatherstack.com/current?access_key=68feb0238fd5bf731167e86146b2004e&query=B`
// axios.get(url)
//     .then(resp => {
//         if (resp.data.error) {
//             // if an error exists print it, else print temperature
//             console.log(resp.data.error.info, resp)
//         } else {
//             // if everything goes well, print the temperature
//             console.log(`The temperature is ${resp.data.current.temperature}`)
//         }
//     })
//     // for network errors
//     .catch(error => {
//         console.log("Network Error")
//     })

// good url
let url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${key.maps}&limit=1`

// bad url
// let url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/ghfjkd.json?access_token=${key.maps}&limit=1`
axios.get(url2)
    .then(resp => {
        let place = resp.data.features[0].place_name
        let long = resp.data.features[0].center[0]
        let lat = resp.data.features[0].center[1]

        console.log(`${place}, Long: ${long} Lat: ${lat}`)
    })
    .catch(error => {
        console.log("Something went wrong: either there was a network error or the place you entered cannot be found")
    })