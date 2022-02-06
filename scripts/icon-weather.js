export default function iconWeather(dados){

    const $ = document.querySelector.bind(document)
    let weather = dados.current.condition.text
    let addIcon = ""

    if(weather.includes("thunder")){
        addIcon = "../assets/storm.png"
        
    }else if(weather.includes("Sun")){
        addIcon = "../assets/sun.png"

    }else if(weather.includes("fog")){
        addIcon = "../assets/cloud.png"

    }else if(weather.includes("Cloudy")){
        addIcon = "../assets/cloudy.png"

    }else if(weather.includes("rain")){
        addIcon = "../assets/raining.png"
        
    }
    return addIcon
    
}
