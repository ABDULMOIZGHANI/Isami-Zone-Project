import React from "react";
import Button from "./Button";

const EnrollNow = () => {
  return (
    <section className="w-[90%] md:w-[85%] flex justify-between md:flex-row flex-col items-center m-auto mt-[60px] mb-[30px]">
      <div className="w-[85%] md:w-[50%] flex flex-col gap-10 mb-[30px] md:mb-[0px] ">
        <h2 className="text-[38px] font-bold cinzel">Enroll Now</h2>
        <p className="poppins text-[17px] text-[#171717]">
          Join thousands of satisfied students worldwide and take the first step
          toward mastering Quranic knowledge with Islami Zone. Learn, grow, and
          connect with the divine message—all online, all tailored for you. Join
          now whether you want to memorize the Quran, improve your Tajweed, or
          learn the Arabic language, Islami Zone is here to guide you every step
          of the way. Start your journey today and experience a world-class
          Quran learning experience from wherever you are.
        </p>
        <div>
          <Button value="Enroll Now" />
        </div>
      </div>
      <img src="/AboutUs/Enroll-Now.png" alt="Enroll-Now Quran Pak" />
    </section>
  );
};

export default EnrollNow;
