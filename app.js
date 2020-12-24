const request = require('request')
const axios = require('axios')
const key = require('./key.js')

let url = `http://api.weatherstack.com/current?access_key=68feb0238fd5bf731167e86146b2004e&query=New%20York`
request({url: url}, (error, resp) => {
    let data =  JSON.parse(resp.body)
    console.log(data.current)
}) 
