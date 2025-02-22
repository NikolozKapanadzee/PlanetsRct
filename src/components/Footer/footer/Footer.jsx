import React from "react";
import Data from "../../../data.json"
import { useParams } from "react-router";

function Footer() {
    const { name } = useParams();
    const NewData = Data.find((planet) => planet.name === name);
    console.log(NewData);
    return(
        <>
        <div className="footer_info flex flex-col items-center pl-[24px] pr-[24px] gap-[8px]  mt-[28px] mb-[47px] ">
            <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px]">
                <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] " >ROTATION TIME</p>
                <h2 className="text-white font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase " >{NewData.rotation}</h2>
            </div>
            <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px]">
                <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] " >REVOLUTION TIME</p>
                <h2 className="text-[#fff] font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase " >{NewData.revolution}</h2>
            </div>
            <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px]">
                <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] " >radius</p>
                <h2 className="text-[#fff] font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase " >{NewData.radius}</h2>
            </div>
            <div className="copy flex items-center justify-between border-solid border-1 border-[rgba(255,255,255,0.2)] w-full h-[48px]">
                <p className="text-[#fff] font-spartan pl-[24px] text-[8px] font-bold leading-[16px] uppercase tracking-[0.727px] opacity-[0.5] " >AVERAGE TEMP.</p>
                <h2 className="text-[#fff] font-antonio pr-[24px] text-[20px] not-italic tracking-[-0.75px] uppercase " >{NewData.temperature}</h2>
            </div>
        </div>
        </>
    )
}
export default Footer;