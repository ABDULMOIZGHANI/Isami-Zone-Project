import { createContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const courseAPI = "http://localhost:8008/all-courses";

const AppProvider = ({ children }) => {
  const getCourses = async (url) => {
    const response = await axios.get(url);
    const allCourses = response.data;
    console.log(allCourses);
  };

  useEffect(() => {
    getCourses(courseAPI);
  }, []);

  return <AppContext.Provider value="MOIZ">{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
