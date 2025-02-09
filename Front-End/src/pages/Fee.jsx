import React from "react";
import Button from "../components/Button";
import OutlineBtn from "../components/OutlineBtn";

const Fee = () => {
  return (
    <div className="flex items-center justify-between w-[85%] m-auto gap-[5px]">
      <div className="w-[30%] h-[447px] bg-[#e7e7e7] rounded-xl shadow-xl p-5 text-center text-white mt-[40px] mb-[40px]">
        {/* Top Header */}
        <div className="text-2xl font-bold cinzel text-[#171717]">
          Free Trial
        </div>

        {/* Fee Details */}
        <div className="mt-5 bg-gradient-to-b  text-black rounded-lg shadow pt-3 pb-3">
          <div className="mb-3 border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Duration</p>
            <p className="text-base poppins">30 min</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Week</p>
            <p className="text-base poppins">6</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Month</p>
            <p className="text-base poppins">24</p>
          </div>
          <div>
            <p className="text-lg font-semibold poppins">Fee per Month</p>
            <p className="text-base poppins">Rs 10,000</p>
          </div>
        </div>

        {/* Collect Now Button */}
        <div className="mt-[20px]">
          <Button value="Book Now" />
        </div>
      </div>

      <div className="w-[33%] h-[500px]  bg-gradient-to-b from-[#246545] to-[#007245] rounded-xl shadow-xl p-5 text-center text-white mt-[40px] mb-[40px] flex flex-col justify-between">
        {/* Top Header */}
        <div className="text-2xl font-bold cinzel text-[#fff]">Basic Plan</div>

        {/* Fee Details */}
        <div className="mt-5 bg-[#fff]  text-black rounded-lg shadow pt-6 pb-6">
          <div className="mb-3 border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Duration</p>
            <p className="text-base poppins">30 min</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Week</p>
            <p className="text-base poppins">6</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Month</p>
            <p className="text-base poppins">24</p>
          </div>
          <div>
            <p className="text-lg font-semibold poppins">Fee per Month</p>
            <p className="text-base poppins">Rs 10,000</p>
          </div>
        </div>

        {/* Collect Now Button */}
        <div className="mt-[20px]">
          <OutlineBtn value="Book Now" />
        </div>
      </div>

      <div className="w-[30%] h-[447px]  bg-[#e7e7e7] rounded-xl shadow-xl p-5 text-center text-white mt-[40px] mb-[40px]">
        {/* Top Header */}
        <div className="text-2xl font-bold cinzel text-[#171717]">
          Premium Plan
        </div>

        {/* Fee Details */}
        <div className="mt-5 bg-gradient-to-b  text-black rounded-lg shadow pt-3 pb-3">
          <div className="mb-3 border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Duration</p>
            <p className="text-base poppins">30 min</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Week</p>
            <p className="text-base poppins">6</p>
          </div>
          <div className="mb-3  border-b-1 border-[#7a7a7a] pb-2">
            <p className="text-lg font-semibold poppins">Session Per Month</p>
            <p className="text-base poppins">24</p>
          </div>
          <div>
            <p className="text-lg font-semibold poppins">Fee per Month</p>
            <p className="text-base poppins">Rs 10,000</p>
          </div>
        </div>

        {/* Collect Now Button */}
        <div className="mt-[20px]">
          <Button value="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Fee;
