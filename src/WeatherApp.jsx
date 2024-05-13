import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]  = useState({ 
    city: "",
    description: "",
    feelsLike: null,
    humidity: null,
    maxTemp: null,
    minTemp: null,
    temp: null
})

function updateWeather(res){
    setWeatherInfo(res);
}
       
    return (
        <div>
            <h2 style={{fontSize: "2rem", marginBottom: "60px"}}>Weather App by Ritansh <  FavoriteIcon /></h2>
            <SearchBox updateWeather={updateWeather}/>
            <hr style={{marginBottom: "30px"}}></hr>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}