"use client";
import React from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { UseGlobal } from "../context/GlobalContext";
import Image from "next/image";
import { Raleway } from "next/font/google";
import {TiLocationArrow} from "react-icons/ti"
const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

function Hightlights() {
  const MyTestArray = [0, 0, 0, 0];
  const { FullWeekData } = UseGlobal();
  //http://openweathermap.org/img/wn/10d@2x.png
  //`
  const Speed = FullWeekData ? FullWeekData[0]?.wind.speed : 0;
  const visibilityMiles = FullWeekData ? (FullWeekData[0]?.visibility * 0.000621371).toFixed(1).replace('.',',') : 0;
  const Humidity = FullWeekData ? FullWeekData[0]?.main.humidity : 0
  const Pressure = FullWeekData ? FullWeekData[0]?.main.pressure : 0

  return (
    <div className={`w-full px-10 pt-14 lg:pl-32 md:pl-32 sm:pl-24 xs:pl-12 ${raleway.className} `}>
      <p className="text-white text-3xl font-semibold">Today's Hightlights</p>
      <div className="grid lg:grid-cols-2 lg:w-[52vw]  pt-5 gap-20 ">

        <div className="grid place-items-center   relative  bg-[#1e213a] text-white w-full h-52 gap-10 ">
          <div className="absolute pt-4 top-0 flex justify-center  w-full  ">
            <p className="">Wind Status</p>
          </div>
          <div className=" flex justify-center items-center w-full ">
            <p className=" text-[#e7e7eb] flex justify-center items-center gap-2"><font className="text-6xl font-bold">{Speed === undefined ? 0 : Math.round(Speed)}</font><font className="text-3xl">mph</font></p>
          </div>
          <div className="absolute flex items-center gap-3 bottom-0 pb-4">
            <TiLocationArrow className="bg-[#616475] rounded-full p-1 text-white text-3xl"/>
            <p>WSW</p>
            </div>
        </div>

        <div className="flex flex-col gap-8 bg-[#1e213a] text-white w-full h-52  ">
          <div className="flex w-full justify-center  pt-5">
            <p>Humidity</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
          <p className="flex text-[#e7e7eb] text-5xl font-bold ">{Humidity === undefined ? 0 : Humidity}%</p>

            <div className={` flex flex-col w-full items-center `}>
              <div className="flex justify-between  lg:w-[20vw] md:w-[20vw] sm:w-[30vw] xs:w-[40vw] xxs:w-[50vw] ">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="relative lg:w-[20vw] md:w-[20vw] sm:w-[30vw] xs:w-[40vw] xxs:w-[50vw] h-2 bg-[#e7e7eb] rounded-full ">
                <div
                  className="h-full bg-[#ffec65] rounded-full "
                  style={{ width: `${Humidity === undefined ? 1 : Humidity}%` }}
                />
                <p className="absolute right-0">%</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid place-items-center   relative  bg-[#1e213a] text-white w-full h-52 gap-10 ">
          <div className="absolute pt-4 top-0 flex justify-center  w-full  ">
            <p className="">Visibility</p>
          </div>
          <div className=" flex justify-center items-center w-full ">
            <p className=" text-[#e7e7eb] flex justify-center items-center  gap-2 "><font className="text-6xl font-bold">{visibilityMiles === "NaN" ? 0 : visibilityMiles}</font><font className="text-3xl"> miles</font></p>
          </div>
        </div>

        <div className="grid place-items-center   relative  bg-[#1e213a] text-white w-full h-52 gap-10 ">
          <div className="absolute pt-4 top-0 flex justify-center  w-full  ">
            <p className="">Air Pressure</p>
          </div>
          <div className=" flex justify-center items-center w-full ">
            <p className=" text-[#e7e7eb] flex justify-center items-center gap-2"><font className="text-6xl font-bold">{Pressure === undefined ? 0 : Pressure}</font><font className="text-3xl">mb</font></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hightlights;

/*

      <div className="grid grid-cols-2 pt-5 gap-10">
        {MyTestArray.map((item,index)=>{
            return(
                <div key={index} className="flex flex-col bg-[#1e213a] text-white w-full h-40 gap-10 ">
                <div className="flex w-full justify-center pt-5">
                  <p>Tomorrow</p>
                </div>
                <div className="flex justify-center w-full relative">
   
                </div>
      
                <div className="flex gap-4 w-full justify-center">
                  <p className="flex">
                    
                  </p>
                  <p className="flex text-white/50">
                    11
                  </p>
                </div>
              </div>
            )
        })}
      </div>

*/
