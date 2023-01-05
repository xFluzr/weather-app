import React from 'react';

import DetailedCard from './DetailedCard';

const WeatherDetails = () => {
  return (
    <div className='wrapper border-t-2 opacity-90 p-8'>
      <h2>WeatherDetails</h2>
      <div className='grid gap-10 grid-cols-4 '>
        <DetailedCard/>
        
      </div>
    </div>
  )
}

export default WeatherDetails