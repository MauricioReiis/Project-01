import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical.js"
import logout from "./scripts/logout-logical.js"

passwordLogical()
logout()

setInterval(() => {
    clockLogical()
}, 1000);