const apiKey ="17724213a88efe56e95d09382dff4db9";
const apiUrl ="http://api.openweathermap.org/data/2.5/weather?";


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({updateWeather}){

    const [city,setCity] = useState("");
    const [error, setError] = useState(false);

    function handleCity(e){
        setError(false);
        setCity(e.target.value);
    }

    async function handleSubmit(e){
        try{
            e.preventDefault();
            setCity("");
            const information =  await getWeatherInfo();
            updateWeather(information);
        }catch(err){
            setError(true);
        }
      
    }

     async function  getWeatherInfo(){
        try{
            let res = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}&units=metric`);
            let data = await res.json();
            let finalData = {
                city: city,
                description: data.weather[0].description,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
    
                maxTemp: data.main.temp_max,
                minTemp: data.main.temp_min,
                temp: data.main.temp
             
                
            }
            return finalData;
        }catch(err){
            throw err;
    }
    }

    return(
        <div>
         
            <form onSubmit={handleSubmit}> 
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
            <br></br><br></br>
            <Button style={{marginBottom: "20px"}}variant="contained" type='submit'>
                Search
            </Button>
            {error && <p style={{color: "red"}}>No such place Exits!</p>}
            </form>
        </div>
    )

   
}

export default SearchBox;