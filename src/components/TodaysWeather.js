import React from 'react';

//Components
import HourlyWeather from './HourlyWeather';
import LocationWeather from './LocationWeather';



const TodaysWeather = ({weatherData}) => {
  return (
    <div className='flex wrapper gap-10 h-1/3 items-center'>
        <LocationWeather weatherData={weatherData}/>
        <HourlyWeather weatherData={weatherData}/>
    </div>
  )
}

export default TodaysWeather