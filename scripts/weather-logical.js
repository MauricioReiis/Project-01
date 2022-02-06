export default function weatherLogical(){
    fetch ("https://api.weatherapi.com/v1/current.json?key=1908e74e14814574bc602922220602&q=Juiz-de-Fora&aqi=no")

    .then(resposta => resposta.json()) 
    .then(dados => {

        const $ = document.querySelector.bind(document)

        const city = $("#weather-city-state p")
        const state = dados.location.region
        const temp = $("#weather-temperature p")
        const condition = dados.current.condition.text

        console.log(city, state, temp, condition)


        city.textContent = `${dados.location.name} - MG`
        temp.textContent = `${dados.current.temp_c.toFixed(0)}° `
    }) 
}