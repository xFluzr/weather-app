import React,{useEffect,useState} from 'react'

import Navbar from '../components/Navbar';
import TodaysWeather from '../components/TodaysWeather';
import WeatherDetails from '../components/WeatherDetails';

import { fetchData, weatherFetchingOptions } from '../utils/api';

const Home = () => {
  const [isCelsius,setIsCelsius]=useState(true);
  const [isLoading,setIsLoading]=useState(true);
  const [inputValue,setInputValue]=useState('');
  const [weatherData,setWeatherData]=useState({});

  //Navbar Function
  const changeTemparuteHandler=()=>{
    setIsCelsius(!isCelsius);
  };
  //Navbar Function
  const onChangeHandler=(e)=>{
    setInputValue(e.target.value);
  }


  useEffect(()=>{
    const getData=async()=>{
      const responseJson=await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${'Warsaw'}`,weatherFetchingOptions);
      const data=await responseJson;
      setWeatherData(data);
      setIsLoading(false);
    }
    getData()
  },[]);
  if(isLoading){
    return <div>Loading</div>
  }
  return (
    <div className='flex flex-col gap-20 h-full'>
        <Navbar isCelsius={isCelsius} inputValue={inputValue} changeTemparuteHandler={changeTemparuteHandler} onChangeHandler={onChangeHandler}/>
        <TodaysWeather weatherData={weatherData}/>
        <WeatherDetails weatherData={weatherData}/>
    </div>
  )
}

export default Home