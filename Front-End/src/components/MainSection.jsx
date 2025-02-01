import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MainSection = () => {
  return (
    <Section>
      <div className="w-[85%] m-auto h-[100%] flex items-center">
        <form
          action=""
          className="w-[419px] h-[80%] bg-[#fff] rounded-[25px] flex flex-col justify-between pt-[60px] pb-[70px] pr-[20px] pl-[20px]"
        >
          <h1 className="poppins text-[29px] font-bold text-center">
            Sign up for free trial
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              required
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              required
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
            <input
              type="text"
              placeholder="Whatsapp Number"
              required
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
          </div>
          <Button value={"Submit"} />
        </form>
      </div>
    </Section>
  );
};

export default MainSection;

const Section = styled.main`
  background-image: url("/sectionImages/MAIN SECTION BG.png"); /* Replace with your image path */
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating */
  width: 100%; /* Ensures full width */
  height: 90vh; /* Adjust as needed */
`;
