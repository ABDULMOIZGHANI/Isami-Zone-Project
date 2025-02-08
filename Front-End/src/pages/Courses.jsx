import React from "react";
import styled from "styled-components";
import { useCoursesContext } from "../context/courseContext";
import Button from "../components/Button";

const Courses = () => {
  const { isLoading, allCourses } = useCoursesContext();
  console.log("ALLCOURSES", allCourses);

  return (
    <div className="relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />
      <section className="w-[85%] m-auto">
        <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
          Our Courses
        </h1>
        <p className="text-[18px] text-[#171717] poppins text-center mb-[80px]">
          Welcome to the Courses section of Islami Zone, your trusted
          destination for learning and understanding the divine teachings of
          Islam. We offer a wide range of carefully designed Islamic courses for
          children, adults, and females, ensuring everyone can deepen their
          connection with the Quran and Sunnah.
        </p>

        <div className="flex justify-between gap-[10px] flex-wrap">
          {allCourses.map((course) => (
            <div className="w-[381px] bg-[#D8D8D8] shadow text-center flex flex-col gap-3 p-[20px] rounded-2xl">
              <img
                className="block center"
                src={course.img}
                alt={course.title}
              />
              <h2 className="cinzel font-bold text-[20px] text-[#171717]">
                {course.title}
              </h2>
              <p className="poppins text-[15px] text-[#171717] font-light">
                {course.detail.slice(0, 203)}...
              </p>
              <div className="mt-[10px]">
                <Button value="Read More" />
              </div>
            </div>
          ))}
        </div>
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
