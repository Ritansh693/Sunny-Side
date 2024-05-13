import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"
import { useEffect } from 'react';


export default function InfoBox({info}){
    const linkAdd = "https://images.unsplash.com/photo-1501898047706-55903296cd09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainyAdd = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hotAdd = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const coldAdd = "https://images.unsplash.com/photo-1608905978123-558c415998e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    let weatherIcon;
    if (info.humidity > 90) {
        weatherIcon = <ThunderstormIcon />;
    } else if (info.temp > 15) {
        weatherIcon = <WbSunnyIcon />;
    } else {
        weatherIcon = <AcUnitIcon />;
    }

    return(
        <div>
           
            <Card sx={{ minWidth: 380}}>
                 <CardMedia
                    sx={{ height: 170 }}
                    image=
                    {info.humidity == null ? linkAdd :  info.humidity > 90 ? rainyAdd : info.temp > 15 ? hotAdd : coldAdd}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize: "2rem"}}>
                       {capitalizeFirstLetter(info.city) }  {info.humidity == null ? null : weatherIcon}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        
                        <p className="para">Humidity = {info.humidity}°C</p>
                        <p className="para">Temp = {info.temp}°C</p>
                        <p className="para">MinTemp = {info.minTemp}°C</p>
                        <p className="para">MaxTemp = {info.maxTemp}°C</p>
                        <p className="para">It Feels like {info.feelsLike}°C in {info.city}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}