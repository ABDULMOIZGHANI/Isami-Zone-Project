import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import CoursesReducer from "../reducers/CoursesReducer";

const AppContext = createContext();
const courseAPI = "http://localhost:8008/all-courses";
const initialState = {
  isLoading: false,
  isError: false,
  allCourses: [],
  coursesForChildrens: [],
  coursesForAdults: [],
  coursesForFemales: [],
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

  useEffect(() => {
    getCourses(courseAPI);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useCoursesContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useCoursesContext };
