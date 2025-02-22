import React, { useEffect } from "react";

const AllStudents = () => {
  useEffect(() => {
    AllStudents();
  }, []);

  return <div></div>;
};

export default AllStudents;
