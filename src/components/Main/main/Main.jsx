import React, { useState } from "react";
import { Link, useParams } from "react-router";
import Data from "../../../data.json"
import EarthImg from "../../../assets/images/planet-earth.svg";
import EarthInternal from "../../../assets/images/planet-earth-internal.svg";
import EarthGeology from "../../../assets/images/geology-earth.png";
import VenusImg from "../../../assets/images/planet-venus.svg";
import VenusInternal from "../../../assets/images/planet-venus-internal.svg";
import VenusGeology from "../../../assets/images/geology-venus.png";
import UranusImg from "../../../assets/images/planet-uranus.svg";
import UranusInternal from "../../../assets/images/planet-uranus-internal.svg";
import UranusGeology from "../../../assets/images/geology-uranus.png";
import SaturnImg from "../../../assets/images/planet-saturn.svg";
import SaturnInternal from "../../../assets/images/planet-saturn-internal.svg";
import SaturnGeology from "../../../assets/images/geology-saturn.png";
import NeptuneImg from "../../../assets/images/planet-neptune.svg";
import NeptuneInternal from "../../../assets/images/planet-neptune-internal.svg";
import NeptuneGeology from "../../../assets/images/geology-neptune.png";
import MercuryImg from "../../../assets/images/planet-mercury.svg";
import MercuryInternal from "../../../assets/images/planet-mercury-internal.svg";
import MercuryGeology from "../../../assets/images/geology-mercury.png";
import MarsImg from "../../../assets/images/planet-mars.svg";
import MarsInternal from "../../../assets/images/planet-mars-internal.svg";
import MarsGeology from "../../../assets/images/geology-mars.png";
import JupiterImg from "../../../assets/images/planet-jupiter.svg";
import JupiterInternal from "../../../assets/images/planet-jupiter-internal.svg";
import JupiterGeology from "../../../assets/images/geology-jupiter.png";
import LinkArrow from "../../../assets/images/link-arrow.svg"

const planetImages = {
    Earth: EarthImg,
    Venus: VenusImg,
    Uranus: UranusImg,
    Saturn: SaturnImg,
    Neptune: NeptuneImg,
    Mercury: MercuryImg,
    Mars: MarsImg,
    Jupiter: JupiterImg,
  };
  
  const planetInternalImages = {
    Earth: EarthInternal,
    Venus: VenusInternal,
    Uranus: UranusInternal,
    Saturn: SaturnInternal,
    Neptune: NeptuneInternal,
    Mercury: MercuryInternal,
    Mars: MarsInternal,
    Jupiter: JupiterInternal,
  };
  
  const planetGeologyImages = {
    Earth: EarthGeology,
    Venus: VenusGeology,
    Uranus: UranusGeology,
    Saturn: SaturnGeology,
    Neptune: NeptuneGeology,
    Mercury: MercuryGeology,
    Mars: MarsGeology,
    Jupiter: JupiterGeology,
  };


 
  

function Main() {
    const { name } = useParams();
    const NewData = Data.find((planet) => planet.name === name);
    console.log(NewData);
    const [isSelected, setIsSelected] = useState("overview")
    const SelectOverview = (selection) => {
        setIsSelected(selection)
    }
    return(
        <>
        <div className="main flex flex-col items-center">
            <div className="buttons_div flex flex-col items-center pt-[20px] w-full">
                <div className="buttons flex items-center w-full justify-between pr-[24px] pl-[24px] ">
                    <button  onClick={() => SelectOverview("overview")} className="font-spartan text-[#FFF] uppercase cursor-pointer" >OVERVIEW</button>
                    <button  onClick={() => SelectOverview("structure")}  className="font-spartan text-[#FFF] uppercase cursor-pointer ">Structure</button>
                    <button  onClick={() => SelectOverview("surface")}  className="font-spartan text-[#FFF]  uppercase cursor-pointer ">Surface</button>
                </div>
                <div className="w-full h-[1px] border border-[#fff] border-solid opacity-[0.2] mt-4 " ></div>
            </div>
            <div className="image_div mt-[95px] mb-[98px] flex flex-col items-center justify-center relative w-full max-w-[224px] max-h-[224px] ">
             {(isSelected === "overview" || isSelected === "surface") && (
              <img  src={planetImages[NewData.name]} />
             )}
              {isSelected === "structure" && (
              <img src={planetInternalImages[NewData.name]} />
              )}
             {isSelected === "surface" && (
              <img className="w-[110px] absolute top-[70%] " src={planetGeologyImages[NewData.name]}/>)}
              </div>
            <div className="content_div flex flex-col items-center">
                <h1 className="text-[#fff] font-antonio uppercase leading-normal text-[40px] not-italic " >{NewData.name}</h1>
                <p className="font-spartan text-[#fff] text-center text-[11px] not-italic leading-[22px] w-[327px] mt-[16px] ">{NewData.overview.content}</p>
                <div className="source_div flex gap-[2px] items-center mt-[32px] ">
                <p className="text-[#fff] opacity-[0.5] font-spartan font-normal text-[12px] tracking-wider " >Source:
                    <Link to={NewData.overview.source} >
                     <span className="text-[#fff] font-bold leading-[25px] underline cursor-pointer font-spartan ml-[5px] " >Wikipedia</span>
                    </Link>
                </p>
                <Link to={NewData.overview.source} >
                <img  className="cursor-pointer" src={LinkArrow}/>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Main;
