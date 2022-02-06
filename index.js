import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical.js"
import logout from "./scripts/logout-logical.js"
import weatherLogical from "./scripts/weather-logical.js"

passwordLogical()
logout()
weatherLogical()

setInterval(() => {
    clockLogical()
}, 1000);