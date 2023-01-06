import React from 'react';

//Functions
import {getCurrentHour,sliceCurrentHour} from '../utils/currentTime';

const HourlyWeather = ({forecast}) => {
   if(!forecast){
    return<div>Loadin...</div>
   }

   //Getting acces to 24 hours from api response
   const {forecastday}=forecast;
   const hourlyForecast=forecastday[0].hour;
   const currentHour=getCurrentHour();
   const currentHourData=hourlyForecast.filter((item,index)=>{
        if(`${sliceCurrentHour(item.time)}`===currentHour){
            return index;
        }
   });
   

  return (
    <div className='flex-1 flex items-center justify-center h-full gap-5'>
        <div className='flex-col items-center text-center '>
            <h3>Now</h3>
            <div className='rounded-full flex-col bg-neutral-300 py-8'>
                <img src={currentHourData[0].condition.icon} alt='weather icon'/>
                <p>{currentHourData[0].temp_c}&deg;</p>
            </div>
        </div>
            <div className='flex-col items-center text-center'>
                <h3>Now</h3>
                <div className='rounded-full flex-col bg-teal-700 py-8 '>
                    <img src='.asf' alt='weather icon'/>
                    <p>-1&deg;</p>
                </div>
            </div>
    </div>
  )
}

export default HourlyWeather