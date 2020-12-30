let axios = require('axios')
const key = require('../key.js')

// good url
let url = `http://api.weatherstack.com/current?access_key=${key.weatherstack}&query=New%20York`

// bad url
// let url = `http://api.weatherstack.com/current?access_key=68feb0238fd5bf731167e86146b2004e&query=B`
let forecast = (latitude, longitude, callback) => {
    axios.get(url)
    .then(resp => {
        if (resp.data.error) {
            // if an error exists, pass the error to the callback function
            // console.log(resp.data.error.info, resp)
            callback(resp.data.error.info, undefined)
        } else {
            // if everything goes well, pass data to callback function
            // console.log(`The temperature is ${resp.data.current.temperature}`)
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