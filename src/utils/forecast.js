const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cb52c8601abee39a4a03f72916696d10&query=' + latitude + ',' + longitude + '&units=f'
   
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(' It is currently ' + body.current.weather_descriptions + " " + body.current.temperature, " ********")
            callback(undefined, 'It is currently ' + body.current.weather_descriptions + " " + body.current.temperature, )
        }
    })
}

module.exports = forecast