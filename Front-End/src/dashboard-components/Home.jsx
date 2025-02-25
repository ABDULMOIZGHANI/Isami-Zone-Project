import React, { useEffect, useState } from "react";
import { useCoursesContext } from "../context/courseContext";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const { isLoading, allStudentsData } = useCoursesContext();

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setUserID(localStorage.getItem("user_id"));
  }, []);

  console.log("User ID:", userID);
  console.log("User Name:", userName);

  // Ensure that userID and allStudentsData are available before searching
  const currentStudent = allStudentsData?.find(
    (student) => student._id === userID
  );

  console.log("CURR STUDENT:", currentStudent);

  if (isLoading) return <h1>Loading...</h1>; // Prevent rendering if still loading
  // if (!currentStudent) return <h1>No student found</h1>; // Prevent crash if student doesn't exist

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

      {/* Student Schedule */}
      {!currentStudent ? (
        <h1 className="mt-4 cinzel">No student found</h1>
      ) : (
        <div className="max-w-lg mx-auto mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Student Schedule
          </h2>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Day</th>
                <th className="p-3 text-left">Timing</th>
                <th className="p-3 text-left">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {currentStudent.days?.map((day, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-3">{day}</td>
                  <td className="p-3">{currentStudent.timing[0] || "N/A"}</td>
                  <td className="p-3">{currentStudent.teacher[0] || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Home;
