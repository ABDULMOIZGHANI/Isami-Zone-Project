import React, { useEffect, useState } from "react";
import DashboardSideBar from "./DashboardSideBar";
import { useParams } from "react-router-dom";
import Home from "./Home";

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
        {page === "recent-feedbacks" && "THIS IS FEEDBACKS "}
        {page === "approved-feedbacks" && "THIS IS APPROVED FEEDBACKS "}
        {page === "all-students" && "THIS IS ALL STUDENTS"}
        {page === "all-teachers" && "THIS IS ALL TEACHERS PAGE"}
      </div>
    </main>
  );
};

export default Dashboard;
