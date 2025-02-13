import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState(""); // To track the selected role

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <section className="mb-[40px] relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />

      <div className=" w-[90%] md:w-[85%] m-auto">
        <h1 className="text-center cinzel text-4xl font-bold pt-[80px] pb-[30px]">
          Great to See You Again! Please Sign In
        </h1>

        <form
          action=""
          className="relative md:w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email"
              required
              className=" border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              required
              className=" border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
          </div>
          <Button value={"LogIn"} />
          <p className="text-center text-[#383838] mt-[20px] poppins font-light">
            Don't you have an account ?{" "}
            <Link to="/signup" className="underline text-[#246545] font-bold">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

const LeftStars = styled.img`
  position: absolute;
  left: 0px;
  top: 10px;
  @media (max-width: 768px) {
    /* display: none; */
    width: 80px;
  }
`;

const RightStars = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
  @media (max-width: 768px) {
    /* display: none; */
    width: 80px;
  }
`;
