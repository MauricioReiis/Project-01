import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical.js"
import logout from "./scripts/logout-logical.js"
import weatherLogical from "./scripts/weather-logical.js"
// history.pushState(null, "Login - First Project", "https://mauricioreiis.github.io/Project-01/login")

passwordLogical()
logout()
weatherLogical()

setInterval(() => {
    clockLogical()
}, 1000);