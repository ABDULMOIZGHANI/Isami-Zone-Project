import React from "react";
import styled from "styled-components";

const Courses = () => {
  return (
    <div className="relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />
      <section className="w-[85%] m-auto">
        <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
          Our Courses
        </h1>
        <p className="text-[18px] text-[#171717] poppins text-center mb-[100px]">
          Welcome to the Courses section of Islami Zone, your trusted
          destination for learning and understanding the divine teachings of
          Islam. We offer a wide range of carefully designed Islamic courses for
          children, adults, and females, ensuring everyone can deepen their
          connection with the Quran and Sunnah.
        </p>

        {}
      </section>
    </div>
  );
};

export default Courses;

const LeftStars = styled.img`
  position: absolute;
  left: 0px;
  top: 10px;
`;

const RightStars = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
`;
