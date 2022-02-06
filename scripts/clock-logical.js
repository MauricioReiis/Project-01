export default function clockLogical(){
    
    const $ = document.querySelector.bind(document)

    let  updatedTime = $("#clock h1")
    let  updatedDay = $("#clock p")

    let date = new Date();

    let hours = date.getHours();
    let minutes= date.getMinutes();
    let weekDay = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

const week = new Array(   
    "domingo", 
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
) 

const monthOfYear = new Array(  
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
) 

updatedTime.innerText = `${hours<=9 ? "0" : ""}${hours}:${minutes<=9 ? "0" : ""}${minutes}`

updatedDay.innerText = `${week[weekDay]}, ${day<=9 ? "0" : ""}${day} de ${monthOfYear[month]} de ${year}`

}