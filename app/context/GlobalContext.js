"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});
const API_KEY = "87998f44ea138cfc20f2eba1bc92bb6c";

function GlobalProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [FullWeekData, setFullWeekData] = useState([])
  const [Cities, setCities] = useState([  {name:"London",country:"RU"},
  {name:"Barcelona",country:"BA"},
  {name:"Long Beach",country:"LB"}])

  const GetWeatherData = async(city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      localStorage.setItem("city",city )
      setWeatherData(data)
    } catch (error) {
      console.log("error is on GetWeatherData"+error);
    }
  };

  const GetCities = async(item)=>{
    try {
      const res = await fetch(`https://apimocha.com/weatherapi/MyCities`);
      const data = await res.json();
      const Filtrar = data.filter((fil)=> item === "" ? fil : fil.name.toLowerCase().includes(item.toLowerCase()))
      setCities(Filtrar)
      const city = localStorage.getItem("city")
    } catch (error) {
      console.log("error is on GetCities"+error);
    }
  }
  

  useEffect(() => {
    const GetMyLocation = async()=>{
      if ("geolocation" in  navigator) {
        navigator.geolocation.getCurrentPosition(
          async(position)=>{
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            const data = await result.json()
            setWeatherData(data)
          },
          (error)=>{
            console.error('Error getting location:', error.message);
          }
        )
        
      }
      else{
        console.error('Geolocation is not supported in this browser.');
      }
    }
    GetMyLocation()
  }, [])
  useEffect(() => {
    const GetWeeksAndTodaysWeatherData =async()=>{
      try {
        const FiveDaysWeatherData = weatherData.list.filter((item, index, array)=> {
          const FirstIndex = array.findIndex((el)=> el.dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0])
          return index === FirstIndex
        })
        setFullWeekData(FiveDaysWeatherData)
        console.log(FiveDaysWeatherData)
      } catch (error) {
        console.log("error is on GetWeeksAndTodaysWeatherData"+error);
      }
    }
    GetWeeksAndTodaysWeatherData()
  }, [weatherData]);

  return <GlobalContext.Provider value={{weatherData,GetWeatherData,FullWeekData,GetCities,Cities,FullWeekData}}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;

export const UseGlobal = () => useContext(GlobalContext);
