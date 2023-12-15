import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import moment from "moment/moment";
import Time from "./Time";
const Header = () => {
  

  
  
  return (
    <div className="py-12">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-md text-[#706F6F] mt-5 w-fit mx-auto">
        Journalism Without Fear or Favour
      </p>
      <div className="flex mt-3 flex-col lg:flex-row w-fit mx-auto gap-2 items-center">
        <p className="text-lg  font-medium w-fit mx-auto">
          {moment().format('MMMM, Do, YYYY')}
        </p>
        <span className="text-xs text-gray-500">{"\u2B24"}</span>
        <Time/>
      </div>
    </div>
  );
};

export default Header;
