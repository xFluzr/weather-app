import React from 'react';

//Components
import HourlyWeather from './HourlyWeather';
import LocationWeather from './LocationWeather';



const TodaysWeather = ({weatherPresentData,weatherForecastData}) => {
  
  const forecast=weatherForecastData.forecast
  

  return (
    <div className='flex wrapper gap-10 h-1/3 items-center'>
        <LocationWeather weatherPresentData={weatherPresentData}/>
        <HourlyWeather forecast={forecast?forecast:''} />
    </div>
  )
}

export default TodaysWeather