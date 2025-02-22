import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);
  return (
    <>
      <h1 className="text-[20px] cinzel font-bold">Welcome {userName}</h1>
      <div className="flex justify-between pt-[20px]">
        <div class="w-[30%] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]">
          <div className="flex justify-between">
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">
              All Teachers
            </h2>
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">10+</h2>
          </div>

          <p class="poppins text-[#555] text-sm mt-2">
            Our skilled teachers are here to guide you on your learning journey.
          </p>
        </div>

        <div class="w-[30%] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]">
          <div className="flex justify-between">
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">
              All Students
            </h2>
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">35+</h2>
          </div>

          <p class="poppins text-[#555] text-sm mt-2">
            Join thousands of students gaining knowledge and skills every day.
          </p>
        </div>

        <div class="w-[30%] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]">
          <div className="flex justify-between">
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">
              All Courses
            </h2>
            <h2 class="cinzel font-bold text-[20px] text-[#171717]">100+</h2>
          </div>

          <p class="poppins text-[#555] text-sm mt-2">
            Explore a variety of courses designed to help you succeed.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
