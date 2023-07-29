"use client";
import { RiCelsiusFill } from "react-icons/ri";
import React from "react";
import { UseGlobal } from "../context/GlobalContext";
import Image from "next/image";
import moment from "moment/moment";

function Cards() {
  const { FullWeekData } = UseGlobal();

  const GetTime = (item)=>{
    const dateTime = new Date(item.dt * 1000)
    const FullDate = dateTime.toLocaleDateString()
    const dateObj = moment(FullDate, "M/D/YYYY");
    const formattedDate = dateObj.format('ddd, D MMM');
    console.log(item)
    return formattedDate
  }

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1  w-full lg:px-50 md:px-32 sm:px-32 xs:px-24 xxs:px-12 pt-10 pl-44 gap-8  ">
      {FullWeekData.slice(1,6).map((item,index)=>{
        return(
          <div key={index} className="flex relative items-center justify-center flex-col bg-[#1e213a] text-white w-full h-52 gap-5">

        <div className="flex absolute top-0 w-full justify-center pt-5">
          <p>{GetTime(item)}</p>
        </div>

        <div className="flex items-center justify-center w-full relative">
          <Image src={`http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`} width={100} height={100} quality={100}/>
        </div>

        <div className="flex absolute bottom-0 gap-4 w-full justify-center  pb-5">
          <p className="flex">
            {Math.round(item.main.feels_like)}°C
          </p>
          <p className="flex text-white/50">
            {Math.round(item.main.temp)}°C
          </p>
        </div>

      </div>
        )
      })}
      
    </div>
  );
}

export default Cards;


  ///803 broken clouds - LightCloud
 ///500 light rain    -  LightRain
// 800 - clear sky  - yellow_rounded
////801 -  few cloud
///802 scattered clouds,
//        <div className="bg-HeavyRain bg-cover w-24 h-24 z-10" /> 

      
/*
  return (
    <div className="grid grid-cols-5 w-full px-10 pt-10 pl-44 gap-8 ">
      {FullWeekData.slice(1,6).map((item,index)=>{
        return(
          <div key={index} className="flex flex-col bg-[#1e213a] text-white w-full h-56 gap-5">
        <div className="flex w-full justify-center pt-5">
          <p>Tomorrow</p>
        </div>
        <div className="flex justify-center w-full relative">
        <div className="bg-yellow_rounded  mr-6 bg-cover w-12 h-12 absolute z-10" />
          <div className="bg-Sleet bg-cover w-24 h-24 z-10" />
        </div>

        <div className="flex gap-4 w-full justify-center">
          <p className="flex">
            16
            <RiCelsiusFill className=" text-white text-xl font-bold " />
          </p>
          <p className="flex text-white/50">
            11
            <RiCelsiusFill className=" text-white/50 text-xl font-bold " />
          </p>
        </div>
      </div>
        )
      })}
      
    </div>
  );

  ------------------------------------------------------------------------------
            <div key={index} className="flex flex-col bg-[#1e213a] text-white w-full h-56 gap-5">
        <div className="flex w-full justify-center pt-5">
          <p>Tomorrow</p>
        </div>
        <div className="flex justify-center w-full relative">
        <div className="bg-yellow_rounded  mr-6 bg-cover w-12 h-12 absolute z-10" />
          <div className="bg-Thunderstorm bg-cover w-24 h-24 z-10"/>
        </div>

        <div className="flex gap-4 w-full justify-center">
          <p className="flex">
            16
            <RiCelsiusFill className=" text-white text-xl font-bold " />
          </p>
          <p className="flex text-white/50">
            11
            <RiCelsiusFill className=" text-white/50 text-xl font-bold " />
          </p>
        </div>
      </div>
      ------------------------------------------------
                <div key={index} className="flex flex-col bg-[#1e213a] text-white w-full h-56 gap-5">
        <div className="flex w-full justify-center pt-5">
          <p>Tomorrow</p>
        </div>
        <div className="flex justify-center w-full relative">
        <div className="bg-LightCloud bg-cover w-24 h-24 z-10" /> 
        </div>

        <div className="flex gap-4 w-full justify-center">
          <p className="flex">
            16
            <RiCelsiusFill className=" text-white text-xl font-bold " />
          </p>
          <p className="flex text-white/50">
            11
            <RiCelsiusFill className=" text-white/50 text-xl font-bold " />
          </p>
        </div>
      </div>
      -------------------------------------------------
        <div key={index} className="flex flex-col bg-[#1e213a] text-white w-full h-56 gap-5">
        <div className="flex w-full justify-center pt-5">
          <p>Tomorrow</p>
        </div>
        <div className="flex justify-center w-full relative">
        <div className="bg-HeavyRain bg-cover w-24 h-24 z-10" /> 

        </div>

        <div className="flex gap-4 w-full justify-center">
          <p className="flex">
            16
            <RiCelsiusFill className=" text-white text-xl font-bold " />
          </p>
          <p className="flex text-white/50">
            11
            <RiCelsiusFill className=" text-white/50 text-xl font-bold " />
          </p>
        </div>
      </div>

-----------------------------------------------------------

          <div className="bg-yellow_rounded  mr-6 bg-cover w-12 h-12 absolute z-10" />
          <div className="bg-Sleet bg-cover w-24 h-24 z-10" />
                    <Image src={`http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`} width={100} height={100} quality={100}/>
          {item.weather[0].id === 500 && (<>
            <div className="bg-yellow_rounded  mr-6 bg-cover w-12 h-12 absolute z-10" />
            <div className="bg-Sleet bg-cover w-24 h-24 z-10" />
          </>)}
          {item.weather[0].id === 803 && <div className="bg-LightCloud bg-cover w-24 h-24 z-10" /> }
          { item.weather[0].id === 800 && <div className="bg-yellow_rounded bg-cover w-24 h-24 z-10" />}
*/