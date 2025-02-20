import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [logedIn, setLogedIn] = useState("");

  useEffect(() => {
    setLogedIn(localStorage.getItem("name"));
  }, []);

  return <div>{logedIn}</div>;
};

export default DashboardHome;
