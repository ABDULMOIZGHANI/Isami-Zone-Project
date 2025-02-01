import React from "react";
import {
  AboutUs,
  Courses,
  CoursesCategory,
  Contacts,
} from "../data/AboutUs.js";
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="h-[400px] bg-[#246545] w-[100%]">
        <div className="w-[85%] flex justify-between m-auto pt-16 text-white">
          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">About Us</h2>
            {AboutUs.map((val) => (
              <div className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <p className="poppins text-[18px] text-[#f9f9f9]">
                  {val.value}
                </p>
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Courses For You
            </h2>
            {Courses.map((val) => (
              <div className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <p className="poppins text-[18px] text-[#f9f9f9]">
                  {val.value}
                </p>
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Courses Category
            </h2>
            {CoursesCategory.map((val) => (
              <div className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <p className="poppins text-[18px] text-[#f9f9f9]">
                  {val.value}
                </p>
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Courses Category
            </h2>
            {Contacts.map((val) => (
              <div className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <p className="poppins text-[18px] text-[#f9f9f9]">
                  {val.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1e1e1e] ">
        <div className="w-[85%] m-auto h-[104px] flex justify-between items-center">
          <h2 className="cinzel text-[26px] font-bold text-[#fff]">
            Islami Zone
          </h2>

          <div className="flex gap-[10px]">
            <FaInstagramSquare className="text-[40px] text-[#fff]" />
            <FaFacebookSquare className="text-[40px] text-[#fff]" />
            <FaYoutube className="text-[40px] text-[#fff]" />
          </div>

          <p className="poppins text-[16px] text-[#fff]">
            Copy right reserves Islami Zone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
