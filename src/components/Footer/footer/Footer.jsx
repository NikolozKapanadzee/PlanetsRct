import React from "react";
import Data from "../../../data.json"
import { useParams } from "react-router";

function Footer() {
    const { name } = useParams();
    const NewData = Data.find((planet) => planet.name === name);
    console.log(NewData);
    return(
        <>
        <div className="footer_info flex flex-col items-center pl-[24px] pr-[24px] gap-[8px]  mt-[28px] mb-[47px] md:flex-row ml-auto mr-auto max-w-[768px] ">
           <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px] md:h-22 md:flex-col md:items-start md:pl-[20px] ">
           <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] md:pl-[0px] md:mt-[16px] "> ROTATION TIME</p>
           <h2 className="text-white font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase md:pr-0 md:text-[24px] md:mb-[16px] ">{NewData.rotation}</h2>
         </div>

         <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px] md:h-22 md:flex-col md:items-start md:pl-[20px] ">
           <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] md:pl-[0px] md:mt-[16px] "> REVOLUTION TIME</p>
           <h2 className="text-white font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase md:pr-0 md:text-[24px] md:mb-[16px] ">{NewData.revolution}</h2>
         </div>
         <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px] md:h-22 md:flex-col md:items-start md:pl-[20px] ">
           <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] md:pl-[0px] md:mt-[16px] "> radius</p>
           <h2 className="text-white font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase md:pr-0 md:text-[24px] md:mb-[16px] ">{NewData.radius}</h2>
         </div>
         <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px] md:h-22 md:flex-col md:items-start md:pl-[20px] ">
           <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] md:pl-[0px] md:mt-[16px] "> AVERAGE TEMP.</p>
           <h2 className="text-white font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase md:pr-0 md:text-[24px] md:mb-[16px] ">{NewData.temperature}</h2>
         </div>
        </div>
        </>
    )
}
export default Footer;