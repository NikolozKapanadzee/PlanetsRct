import { Link } from "react-router";
import BurgerMenuImg from "../../../assets/images/burgerMenuIcon.svg";

function Header() {

    return (
      <>
      <div className="header flex  flex-col ">
      <div className=" flex justify-between items-center pt-4 pl-6 pr-6 ">
        <Link to={`/planets/Mercury`} >
        <h2 className="text-[white] text-[28px] not-italic font-normal tracking-[-1.05px] font-antonio text-2xl  leading-normal " >THE PLANETS</h2>
        </Link>
        <Link to={`/`} >
        <img src={BurgerMenuImg}  className="cursor-pointer" />
        </Link>
      </div>
      <div className="w-full h-[1px] border border-[#fff] border-solid opacity-[0.2] mt-4 " ></div>
      </div>
      </>
    )
  }
  
  export default Header;