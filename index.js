import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical.js"

passwordLogical()

setInterval(() => {
    clockLogical()
}, 1000);


