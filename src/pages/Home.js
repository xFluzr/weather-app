import React,{useEffect,useState} from 'react'

import Navbar from '../components/Navbar';
import TodaysWeather from '../components/TodaysWeather';
import WeatherDetails from '../components/WeatherDetails';

import { fetchData, weatherFetchingOptions } from '../utils/api';

const Home = () => {
  const [isCelsius,setIsCelsius]=useState(true);
  const [isLoading,setIsLoading]=useState(true);
  const [inputValue,setInputValue]=useState('');
  const [weatherPresentData,setWeatherPresentData]=useState({});
  const [weatherForecastData,setWeatherForecastData]=useState({});

  //Navbar Function
  const changeTemparuteHandler=()=>{
    setIsCelsius(!isCelsius);
  };
  //Navbar Function
  const onChangeHandler=(e)=>{
    setInputValue(e.target.value);
  }


  useEffect(()=>{
    const getRealTimeData=async()=>{
      const responseJson=await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${'Warsaw'}`,weatherFetchingOptions);
      const data=await responseJson;
      setWeatherPresentData(data);
      setIsLoading(false);
    }
    const getForecastData=async()=>{
      const responseJSON=await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${'Warsaw'}&days=1`,weatherFetchingOptions);
      const forecastData=await responseJSON.json();
      setWeatherForecastData(forecastData);
      setIsLoading(false)
    }

    getRealTimeData().catch(console.error);
    getForecastData().catch(console.error);
  },[]);
  if(isLoading || weatherPresentData.length===0){
    return <div>Loading...</div>
  }
  return (
    <div className='flex flex-col gap-20 h-full'>
        <Navbar isCelsius={isCelsius} inputValue={inputValue} changeTemparuteHandler={changeTemparuteHandler} onChangeHandler={onChangeHandler}/>
        <TodaysWeather weatherPresentData={weatherPresentData} weatherForecastData={weatherForecastData}/>
        <WeatherDetails weatherPresentData={weatherPresentData}/>
    </div>
  )
}

export default Home