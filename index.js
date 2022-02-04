import passwordLogical from "./scripts/password-logical.js"
import clockLogical from "./scripts/clock-logical"

passwordLogical()

setInterval(() => {
    clockLogical()
}, 1000);


