import React,{Component} from "react";


export const weatherFetchingOptions  = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '200d2b451cmshb722d62fd2df977p1f4c7ejsn739de4d03a6c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    if(!response.ok){
        console.log(response.error)
    }
    const data=await response.json();
    return data;
}