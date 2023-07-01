import React, {useState, useEffect} from "react"

function Weather () {
    const [weather, setWeather] = useState("")
    const API_key = "1dffc010d0d44dfef2149a5c82fef9b9"

    const getWeather = (lat,lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            setWeather(`${temperature} @ ${place}`);
        });
    };

    const handleGeoSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather(latitude, longitude);
    };

    const handleGeoError = () => {
        console.log("failed!");
    };

    const askForCoords = () => {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
    };

    useEffect(() => {
        askForCoords();
    }, );

    return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}




function Practice10 () {
    return <Weather />;
}

export default Practice10;