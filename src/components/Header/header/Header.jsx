import { Link } from "react-router";
import BurgerMenuImg from "../../../assets/images/burgerMenuIcon.svg";

function Header() {
  return (
    <>
      <div className="header flex flex-col">
        <div className="flex justify-between items-center pt-4 pl-6 pr-6 md:flex-col">
          <Link to={`/planets/Mercury`}>
            <h2 className="text-[white] text-[28px] not-italic font-normal tracking-[-1.05px] font-antonio text-2xl leading-normal md:mb-[39px]">
              THE PLANETS
            </h2>
          </Link>
          <Link to={`/`}>
            <img
              src={BurgerMenuImg}
              className="cursor-pointer md:hidden"
              alt="Burger Menu"
            />
          </Link>
          <div className="planets_name hidden md:flex items-center gap-[33px]">
            <Link to={`/planets/Mercury`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              mercury
            </p>
            </Link>
            <Link to={`/planets/Venus`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              venus
            </p>
            </Link>
            <Link to={`/planets/Earth`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              earth
            </p>
            </Link>
            <Link to={`/planets/Mars`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              mars
            </p>
            </Link>
            <Link to={`/planets/Jupiter`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              jupiter
            </p>
            </Link>
            <Link to={`/planets/Saturn`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              saturn
            </p>
            </Link>
            <Link to={`/planets/Uranus`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              uranus
            </p>
            </Link>
            <Link to={`/planets/Neptune`} >
            <p className="text-[#fff] text-[11px] not-italic leading-[25px] tracking-[1px] uppercase cursor-pointer">
              neptune
            </p>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] border border-[#fff] border-solid opacity-[0.2] mt-4 md:hidden "></div>
      </div>
    </>
  );
}

export default Header;
