"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Raleway } from "next/font/google";
import { RiCelsiusFill } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import DialogSideCard from "./DialogSideCard";
import { UseDialog } from "../context/DialogContext";
import {MdLocationOn} from "react-icons/md"
import { UseGlobal } from "../context/GlobalContext";
import moment from "moment";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

function Sidebar() {
  const { IsDialogOpen, HandleClose, setIsDialogOpen } = UseDialog();
  const { FullWeekData,inputsCities } = UseGlobal();

  const GetTime = (item)=>{
    const datetime = new Date (item * 1000)
    const FullDate = datetime.toLocaleDateString()
    const objectMoment = moment(FullDate, "M/D/YYYY");
    console.log(objectMoment.format('ddd, D MMM'))
    return objectMoment.format('ddd, D MMM')
  }
  

  return (
    <div className="Sidebar w-full h-full relative  ">
      <div className="h-screen w-full absolute z-30  ">
        {IsDialogOpen ? (
          <DialogSideCard
            IsDialogOpen={IsDialogOpen}
            HandleClose={HandleClose}
          />
        ) : (
          <div className="flex items-center justify-between pt-5 px-5">
            <button
              className="w-44 px-2 py-2 z-30 bg-[#6e7079] border-none outline-none"
              onClick={() => setIsDialogOpen(true)}
            >
              Search for places
            </button>
            <div className="flex items-center justify-center bg-[#6e7079] rounded-full  p-2 ">
              <TbCurrentLocation className=" text-white" />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center pt-20 items-center w-full  h-screen ">
        <p
          className={`${raleway.className} lg:text-9xl md:text-9xl sm:text-7xl xs:text-7xl xxs:text-6xl`}
        >
          {Math.round(FullWeekData[0]?.main?.temp)}
        </p>
        <RiCelsiusFill className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl xxs:text-3xl  lg:mt-16 md:mt-16 sm:mt-12 xs:mt-12 xxs:mt-12   text-white/50 " />
      </div>

      <div className="flex flex-col w-full items-center absolute gap-10 bottom-0 pb-10 ">
        <p className={`${raleway.className} text-3xl text-white/50`}>Shower</p>
        <div className="flex flex-col items-center gap-5 text-white/50  ">

          <div className={`${raleway.className} flex items-center gap-4 `} >
            <p>Today</p>
            <p>*</p>
            <p> {GetTime(FullWeekData[0]?.dt)}</p>
          </div>
          <p className="flex items-center gap-2"><MdLocationOn className="text-white/50" />{inputsCities}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

/*

      <div className="Sidebar  w-full h-screen relative">
        <SearchSide />
        <div className="flex  justify-center items-center w-full h-screen">
          <p className={`${raleway.className}  text-9xl`} >15</p>
            <RiCelsiusFill className="text-5xl mt-16 text-white/50 " />
          </div>
 
      </div>
*/
