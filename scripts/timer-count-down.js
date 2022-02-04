export default function timerCountDown(){

    const $ = document.querySelector.bind(document)
    const seconds = $("#footer-seconds h2")
    let secondsUpdated = parentInt(seconds)

    setInterval(function() {
        console.log(secondsUpdated)
    },1000);
    
}