import Image from "next/image";
import { RiCelsiusFill } from "react-icons/ri";
import Cards from "./components/Cards";
import Hightlights from "./components/Hightlights";

export default function Home() {
  return (
    <div className="HomeSite flex flex-col  w-full lg:h-screen md:h-screen sm:h-full xs:h-full xxs:h-full  bg-[#100e1d] p-5 lg:overflow-auto md:overflow-auto  ">
      <div className="flex lg:w-full md:w-[70vw] sm:w-[60vw] xs:w-full xxs:w-full h-full  justify-end text-white px-10 gap-4">
        <div className="flex justify-center items-center bg-white rounded-full h-10 w-10">
          <RiCelsiusFill className=" text-black text-xl font-bold " />
        </div>
        <div className="flex justify-center  items-center bg-[#585676] rounded-full h-10 w-10">
        <div className="bg-fahrenheit bg-cover bg-center w-5 h-5 bg-no-repeat " />
        </div>
      </div>
      <Cards />
      <Hightlights />

    </div>
  );
}


/*


*/