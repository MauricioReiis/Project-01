export default function timerCountDown(){

    const $ = document.querySelector.bind(document)
    const seconds = $("#footer-seconds")
    let number = 600

    setInterval(() => {
        seconds.innerHTML = number
        number--
        if(number === 0){
            window.location.reload()
        } 
    },1000);
    
}