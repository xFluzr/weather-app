import React,{useEffect} from 'react'

import Header from '../components/Navbar';
import { fetchData, weatherFetchingOptions } from '../utils/api';

const Home = () => {
  const date=new Date();
  
  const formatData = (input) => {
      if (input > 9) {
        return input;
      } else return `0${input}`;
    };

  useEffect(()=>{
    const getData=async()=>{
      const responseJson=await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${'Warsaw'}`,weatherFetchingOptions);
      const data=await responseJson;
      console.log(data)
    }
    getData()
  },[]);

  return (
    <div>
        <Navbar/>
        <TodaysWeather/>
        <WeatherDetails/>
    </div>
  )
}

export default Home