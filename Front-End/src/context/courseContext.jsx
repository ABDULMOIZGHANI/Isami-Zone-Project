import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import CoursesReducer from "../reducers/CoursesReducer";

const AppContext = createContext();
const courseAPI = "http://localhost:8008/all-courses";
const allStudents = "http://localhost:8008/all-students";
const testimonialsURL = "http://localhost:8008/testimonials";
const allTeachers = "http://localhost:8008/all-teachers";

const initialState = {
  isLoading: false,
  isError: false,
  allCourses: [],
  coursesForChildrens: [],
  coursesForAdults: [],
  coursesForFemales: [],
  allStudentsData: [],
  allTestimonialData: [],
  allTeachersData: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  const getCourses = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const allCourses = response.data;
      // console.log("AL COURSES FROM CONTEXT", allCourses);
      dispatch({ type: "ALL_COURSES", payload: allCourses });
    } catch (error) {
      // console.log(error);
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch all the Students
  const AllStudents = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const response = await axios.get(allStudents);
      const allStudentsData = response.data;
      // console.log("from contextt", allStudentsData);
      dispatch({ type: "ALL_STUDENTS", payload: allStudentsData });
    } catch (error) {
      console.log("Error in fetching the all students", error);
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch all the Teachers
  const AllTeachers = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const response = await axios.get(allTeachers);
      const allTeachersData = response.data;
      console.log("from contextt", allTeachersData);
      dispatch({ type: "ALL_TEACHERS", payload: allTeachersData });
    } catch (error) {
      console.log("Error in fetching the all teachers", error);
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch all the testimonials
  const Testimonials = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const response = await axios.get(testimonialsURL);
      const allTestimonialData = response.data;
      // console.log("from contextt", allTestimonialData);
      dispatch({ type: "ALL_TESTIMONIALS", payload: allTestimonialData });
    } catch (error) {
      console.log("Error in fetching the all Testimonial", error);
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getCourses(courseAPI);
    AllStudents(allStudents);
    AllTeachers(allTeachers);
    Testimonials(testimonialsURL);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, AllStudents, Testimonials }}>
      {children}
    </AppContext.Provider>
  );
};

const useCoursesContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useCoursesContext };
