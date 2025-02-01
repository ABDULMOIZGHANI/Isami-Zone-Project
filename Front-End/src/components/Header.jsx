import React from "react";
import Numbers from "../data/Number.js";
import Button from "./Button.jsx";
import Menu from "./Menu.jsx";
import OutlineBtn from "./OutlineBtn.jsx";

const Header = () => {
  return (
    <nav>
      <div>
        <ul className="bg-[#1E1E1E]">
          <div className="w-[67%] flex h-[60px] items-center justify-between m-auto">
            {Numbers.map((number, index) => (
              <li
                className="flex items-center gap-[8px] cursor-pointer"
                key={index}
              >
                <div className="image">
                  <img src={number.flag} alt="" />
                </div>
                <div className="phone-numbers text-[#f9f9f9] poppins text-base font-normal">
                  {number.phoneNumber}
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>

      <header className="flex items-center justify-between w-[85%] m-auto">
        <div className="logo">
          <img
            src={"/ISLAMI ZONE LOGO.png"}
            className="h-[89px] mt-2 mb-2"
            alt="Islami Zone"
          />
        </div>
        <div className="btn flex gap-[20px]">
          <Button value={"Login"} />
          <OutlineBtn value={"SignUp"} />
        </div>
      </header>

      <Menu />
    </nav>
  );
};

export default Header;
