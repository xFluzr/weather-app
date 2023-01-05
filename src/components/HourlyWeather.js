import React from 'react'

const HourlyWeather = ({data}) => {
  return (
    <div className='flex-1 flex items-center justify-center h-full gap-5'>
        <div className='flex-col items-center text-center '>
            <h3>Now</h3>
            <div className='rounded-full flex-col bg-teal-800 py-8'>
                <img src='.asf' alt='weather icon'/>
                <p>-1&deg;</p>
            </div>
        </div>
        <div className='flex-col items-center text-center'>
            <h3>Now</h3>
            <div className='rounded-full flex-col bg-teal-800 py-8 '>
                <img src='.asf' alt='weather icon'/>
                <p>-1&deg;</p>
            </div>
        </div>
        <div className='flex-col items-center text-center'>
            <h3>Now</h3>
            <div className='rounded-full flex-col bg-teal-800 py-8'>
                <img src='.asf' alt='weather icon'/>
                <p>-1&deg;</p>
            </div>
        </div>
        
    </div>
  )
}

export default HourlyWeather