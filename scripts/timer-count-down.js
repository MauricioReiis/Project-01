export default function timerCountDown(){

    const $ = document.querySelector.bind(document)

    const seconds = $("#box-seconds h2")

    seconds.textContent = "600";
}