import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import CoursesReducer from "../reducers/CoursesReducer";

const AppContext = createContext();
const courseAPI = "http://localhost:8008/all-courses";
const allStudents = "http://localhost:8008/all-students";

const initialState = {
  isLoading: false,
  isError: false,
  allCourses: [],
  coursesForChildrens: [],
  coursesForAdults: [],
  coursesForFemales: [],
  allStudents: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  const getCourses = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const allCourses = response.data;
      console.log(allCourses);
      dispatch({ type: "ALL_COURSES", payload: allCourses });
    } catch (error) {
      console.log(error);
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch all the Students
  const AllStudents = async (allStudents) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const response = await axios.get(allStudents);
      const allStudentsData = response.data;
      console.log(allStudentsData);
      dispatch({ type: "ALL_STUDENTS", payload: allStudents });
    } catch (error) {
      console.log("Error in fetching the all students", error);
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getCourses(courseAPI);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, AllStudents }}>
      {children}
    </AppContext.Provider>
  );
};

const useCoursesContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useCoursesContext };
