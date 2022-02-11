export default function iconWeather(dados){

    let weather = dados.current.condition.text
    let addIcon = ""
    
    if(weather.includes("thunder")){
        addIcon = "./assets/storm.png"
        
    }else if(weather.includes("Sun")){
        addIcon = "./assets/sun.png"

    }else if(weather.includes("Fog") || weather.includes("Mist")){
        addIcon = "./assets/cloud.png"

    }else if(weather.includes("Cloudy") || weather.includes("Overcast")){
        addIcon = "./assets/cloudy.png"
        

    }else if(weather.includes("rain") || weather.includes("drizzle")){
        addIcon = "./assets/raining.png" 
    }
    return addIcon 
}
