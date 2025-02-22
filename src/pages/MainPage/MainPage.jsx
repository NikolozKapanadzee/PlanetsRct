import Header from "../../components/Header/header/Header"
import Arrow from "../../assets/images/arrow.svg"
import { Link } from "react-router";
function MainPage() {

    return (
      <>
      <div>
      <Header />
      <div className="main pl-[24px] pr-[24px] mt-[44px] ">
        <Link to={`/planets/Mercury`} >
        <div className="full_planet flex flex-col justify-center cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#DEF4FC] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >mercury</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Venus`} >
        <div className="full_planet flex flex-col justify-center mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#F7CC7F] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >venus</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Earth`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#545BFE] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >earth</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Mars`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#FF6A45] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >mars</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Jupiter`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#ECAD7A] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >jupiter</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Saturn`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#FCCB6B] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >saturn</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Uranus`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#65F0D5] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >uranus</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
        <Link to={`/planets/Neptune`} >
        <div className="full_planet flex flex-col justify-center  mt-[20px] cursor-pointer ">
        <div className="planet_div flex items-center justify-between ">
          <div className="cicrle_and_name flex items-center gap-[25px] ">
          <div className="cicrle_div w-[20px] h-[20px] bg-[#497EFA] rounded-full"></div>
          <h2 className="text-[#fff] uppercase font-spartan text-[15px] not-italic font-bold tracking-[1.364px]" >neptune</h2>
          </div>
          <img src={Arrow}/>
        </div>
        <div className="line w-full h-[1px] border-solid border-1 border-[white] opacity-[0.1] mt-[20px] "></div>
        </div>
        </Link>
      </div>
      </div>
      </>
    )
  }
  
  export default MainPage;
  