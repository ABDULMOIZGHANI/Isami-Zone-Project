import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
// import Button from "./Button";

const Registration = () => {
  const [role, setRole] = useState(""); // To track the selected role

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <section className="mb-[40px] relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />

      <div className="  w-[85%] m-auto">
        <h1 className="text-center cinzel text-4xl font-bold pt-[80px] pb-[30px]">
          Register Now to Get Started
        </h1>
        <p className="text-[18px] text-[#171717] poppins text-center mb-[30px]">
          Enroll now by filling out the registration form below and submitting
          it. Our team will contact you shortly on the phone number or email
          address you provide to schedule your assessment and class timings.
        </p>

        <form
          action=""
          className="relative w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              required
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
            <div className="w-[100%] flex gap-[20px]">
              <input
                type="text"
                placeholder="Enter Your Gender"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
              <input
                type="number"
                placeholder="Enter Your Age"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
            </div>
            <br />

            <div className="w-[100%] flex gap-[20px]">
              <input
                type="text"
                placeholder="Email"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
            </div>
            <br />
            <div className="w-[100%] flex gap-[20px]">
              <input
                type="number"
                placeholder="Phone Number"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
              <input
                type="number"
                placeholder="Whatsapp Number"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
            </div>
            <br />

            {/* Language Selection Section */}
            <div>
              <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
                Which Language(s) Do You Speak and Understand?
              </h3>
              <div className="flex flex-wrap gap-4 mb-[20px] poppins text-[#171717] ">
                {[
                  "English",
                  "Urdu",
                  "Arabic",
                  "French",
                  "Spanish",
                  "German",
                ].map((language) => (
                  <label key={language} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="languages"
                      value={language}
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="text-lg font-medium text-[#171717]">
                      {language}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
              Register Yourself as a Student or Teacher
            </h3>
            <div className="w-[100%] flex gap-[20px]">
              {/* Student Option */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={role === "Student"}
                  onChange={handleRoleChange}
                  className="w-5 h-5 accent-blue-500"
                />
                <span className="text-lg font-medium text-[#171717]">
                  Student
                </span>
              </label>

              {/* Teacher Option */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Teacher"
                  checked={role === "Teacher"}
                  onChange={handleRoleChange}
                  className="w-5 h-5 accent-blue-500"
                />
                <span className="text-lg font-medium text-[#171717]">
                  Teacher
                </span>
              </label>
            </div>
            <br />

            {/* Conditional Fields for Teacher or Student */}
            {role === "Teacher" ? (
              <div>
                {/* Teacher Details */}
                <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
                  Upload Your CV
                </h3>
                <input
                  type="file"
                  placeholder="Upload your CV"
                  required
                  className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] mb-[10px] poppins"
                />
                <textarea
                  placeholder="Describe yourself as a Teacher"
                  required
                  rows={7}
                  className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                />
                <br />
              </div>
            ) : role === "Student" ? (
              <div>
                {/* Student Details */}
                <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
                  You Studied Under Which Teacher?
                </h3>
                <div className="flex gap-4 mb-[10px]">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="teacher-gender"
                      value="Male"
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="text-lg font-medium text-[#171717]">
                      Male
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="teacher-gender"
                      value="Female"
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="text-lg font-medium text-[#171717]">
                      Female
                    </span>
                  </label>
                </div>
                <textarea
                  placeholder="Describe yourself as a Student"
                  required
                  rows={7}
                  className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                />
                <br />
              </div>
            ) : (
              <></>
            )}

            {/* "Where did you hear about us?" Dropdown */}
            <div className="w-full max-w-md mb-6">
              <label
                htmlFor="source"
                className="block text-lg font-medium text-[#171717] mb-2"
              >
                Where did you hear about us?
              </label>
              <select
                id="source"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Social Media">Facebook</option>
                <option value="Social Media">Youtube</option>
                <option value="Social Media">Instagram</option>
                <option value="Friend or Family">Friend or Family</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <br />
          </div>
          <Button value={"Submit"} />
        </form>
      </div>
    </section>
  );
};

export default Registration;

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
