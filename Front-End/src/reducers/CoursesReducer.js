const CoursesReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "API_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }

  if (action.type === "ALL_COURSES") {
    const coursesForChildren = action.payload.filter(
      (currentChildrenCourse) => {
        return currentChildrenCourse.coursesForChildrens === "CHILDREN";
      }
    );

    const coursesForFemales = action.payload.filter((currentFemalesCourse) => {
      return currentFemalesCourse.coursesForFemales === "FEMALES";
    });

    const coursesForAdults = action.payload.filter((currentAdultCourse) => {
      return currentAdultCourse.coursesForAdults === "ADULTS";
    });

    return {
      ...state,
      isLoading: false,
      isError: false,
      allCourses: action.payload,
      coursesForChildrens: coursesForChildren,
      coursesForAdults: coursesForAdults,
      coursesForFemales: coursesForFemales,
    };
  }

  if (action.type === "ALL_STUDENTS") {
    return {
      ...state,
      isLoading: false,
      isError: false,
      allStudentsData: action.payload,
    };
  }

  if (action.type === "ALL_TESTIMONIALS") {
    return {
      ...state,
      isLoading: false,
      isError: false,
      allTestimonialData: action.payload,
    };
  }

  return state;
};

export default CoursesReducer;
