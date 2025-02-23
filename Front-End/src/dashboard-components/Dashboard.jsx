import React, { useEffect, useState } from "react";
import DashboardSideBar from "./DashboardSideBar";
import { useParams } from "react-router-dom";
import Home from "./Home";
import AllStudents from "./AllStudents";
import Feedback from "./Feedback";
import ApprovedFeedbacks from "./ApprovedFeedbacks";
import AllCourses from "./AllCourses";
import AddCourse from "./AddCourse";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const { page } = useParams();
  console.log(page);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);

  return (
    <main className="flex">
      <DashboardSideBar />
      <div className="w-[100%] p-4">
        {page === "home" && <Home />}
        {page === "recent-feedbacks" && <Feedback />}
        {page === "approved-feedbacks" && <ApprovedFeedbacks />}
        {page === "all-courses" && <AllCourses />}
        {page === "add-courses" && <AddCourse />}
        {page === "all-students" && <AllStudents />}
        {page === "all-teachers" && "THIS IS ALL TEACHERS PAGE"}
      </div>
    </main>
  );
};

export default Dashboard;
