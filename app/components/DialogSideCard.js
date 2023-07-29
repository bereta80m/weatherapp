"use client"
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs"
import React, { useEffect, useState } from "react";
import { UseGlobal } from "../context/GlobalContext";

function DialogSideCard({ HandleClose }) {
  const [inputCity, setInputCity] = useState('')
  const {weatherData,GetWeatherData,GetCities,Cities} = UseGlobal()

  const HandleSubmit = ()=>{
    if(inputCity){
      try {
        GetCities(inputCity)
      } catch (error) {
        console.log("Error is on HandleSubmit"+ error)
      }
    }
  }
  const HandleSelect=(item)=>{
    GetWeatherData(item.name)
    HandleClose()
  }


    
  return (
    <AnimatePresence className="h-screen w-full  ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="flex flex-col bg-[#1e213a] h-screen w-full relative gap-10  "
      >
        <AiOutlineClose
          onClick={() => HandleClose()}
          className="text-5xl cursor-pointer absolute top-0 right-0 p-2 "
        />

        <div className="flex mt-16 gap-4 lg:px-5 md:px-5 sm:px-3 xs:px-3 xxs:px-5">
          <div className="flex lg:w-44 md:w-44 sm:w-44 xs:w-full xxs:w-full items-center border border-white gap-2 p-2">
            <AiOutlineSearch className="text-xl" />
            <input type="text" value={inputCity} onChange={(e)=>setInputCity(e.target.value)} placeholder="Search location" className="w-full  bg-transparent border-none outline-none " />
          </div>
          <button className="bg-[#3c47e9] p-2 " onClick={()=>HandleSubmit()}>Search</button>
        </div>
        <div className="grid grid-cols-1 gap-8 px-2 overflow-auto">
          {Cities.map((item,index)=>{
            return(
              <motion.div whileTap={{rotateX:-100}} key={index} onClick={()=>HandleSelect(item)} className="flex justify-between items-center hover:border border-white/50 p-3  cursor-pointer">
                <p title={item.name} className="truncate">{item.name}</p>
                <p>{item.country}</p>
                <BsArrowRightShort />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DialogSideCard;






/*
  const {SearchByCities,AllCities,FiveDaysWeather} = UseGlobal()

  const FiltrarCities = AllCities.filter((cities)=> inputCity !== '' ? cities.name.toLowerCase().includes(inputCity.toLowerCase()) : '')
  const HandleSubmit = ()=>{
    if (inputCity !== '') {
      SearchByCities(inputCity);
      FiveDaysWeather()
    }
  }
  const HandleSelect = (item)=>{
    setInputCity(item.name)
    FiveDaysWeather(item)
    console.log('')
  }
*/