export default function timerCountDown(){

    const $ = document.querySelector.bind(document)
    const seconds = $("#footer-seconds")
    let number = 600

    setInterval(() => {
        seconds.innerHTML = number
        number--
        if(number === 0){
            // history.pushState(null, "Home - First Project", "https://mauricioreiis.github.io/Project-01")
            window.location.reload()
        } 
    },1000);
    
}