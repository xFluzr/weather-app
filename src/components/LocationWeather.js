import React from 'react'

import locationIcon from '../assets/icons/location-dot-solid.svg';

const LocationWeather = ({weatherData}) => {
  console.log(weatherData)
  return (
    <div className='flex flex-col font-main text-teal-50 text-lg items-center text-center'>
      <div className='flex items-center w-3/4 mb-6'>
        <div>
            <p>Today</p>
            <p className='text-center'>{weatherData.location.localtime.slice(0,10)}</p>
        </div>
          <img src={weatherData.current.condition.icon} className='w-24' alt='some'/>
      </div>
      <h2 className='font-bold text-8xl text-center mb-6'>2&deg;</h2>
      <div className='font-bold flex'><img src={locationIcon} alt='location icon' className='w-3 mr-2'/>{weatherData.location.name}, {weatherData.location.country}</div>
    </div>
  )
}

export default LocationWeather