import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical.js"
import logout from "./scripts/logout-logical.js"
import weatherLogical from "./scripts/weather-logical.js"
import iconWeather from "./scripts/icon-weather.js"

passwordLogical()
logout()
weatherLogical()
iconWeather()

setInterval(() => {
    clockLogical()
}, 1000);