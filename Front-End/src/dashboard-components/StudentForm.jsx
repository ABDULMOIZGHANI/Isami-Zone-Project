import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { handleError, handleSuccess } from "../components/utils";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCoursesContext } from "../context/courseContext";

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, allStudentsData } = useCoursesContext();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
    country: "",
    phoneNumber: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "",
    days: [],
    timing: [],
    teacher: [],
    guardianName: "",
    relation: "",
    language: "",
    hearAboutUS: "",
    underWhichTeacher: "",
    studentDescription: "",
  });

  const existingStudent = allStudentsData.find((student) => student._id === id);
  console.log(existingStudent);

  useEffect(() => {
    if (existingStudent) {
      setFormData({
        name: existingStudent.name || "",
        gender: existingStudent.gender || "",
        age: existingStudent.age || "",
        email: existingStudent.email || "",
        country: existingStudent.country || "",
        phoneNumber: existingStudent.phoneNumber || "",
        whatsappNumber: existingStudent.whatsappNumber || "",
        days: existingStudent.days || [],
        timing: existingStudent.timing || [],
        teacher: existingStudent.teacher || [],
        guardianName: existingStudent.guardianName || "",
        relation: existingStudent.relation || "",
        language: existingStudent.language || [],
        hearAboutUS: existingStudent.hearAboutUS || "",
        underWhichTeacher: existingStudent.underWhichTeacher || "",
        studentDescription: existingStudent.studentDescription || "",
      });
    }
  }, [existingStudent]);

  if (isLoading || !existingStudent) {
    return <p>Loading...</p>; // or any loading spinner component
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "days") {
        setFormData((prev) => ({
          ...prev,
          days: checked
            ? [...prev.days, value]
            : prev.days.filter((day) => day !== value),
        }));
      } else if (name === "language") {
        setFormData((prev) => ({
          ...prev,
          language: checked
            ? [...prev.language, value]
            : prev.language.filter((lang) => lang !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8008/students/update/${id}`,
        formData
      );

      if (response.data.success) {
        handleSuccess("Student updated successfully!");
        setTimeout(() => navigate("/dashboard/all-students"), 1000);
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      console.error("Error updating student:", error);
      handleError("Failed to update student.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative w-[100%]  z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
      >
        <h1 className="cinzel text-[20px] font-bold">Student Details</h1>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name *"
            required
            onChange={handleChange}
            className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
          />
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="text"
              name="gender"
              value={formData.gender}
              placeholder="Enter Your Gender*"
              required
              onChange={handleChange}
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              placeholder="Enter Your Age*"
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email *"
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Country *"
              name="country"
              value={formData.country}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="number"
              placeholder="Phone Number *"
              name="phoneNumber"
              value={formData.phoneNumber}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Whatsapp Number *"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />

          <div className="w-[100%] flex gap-[20px]">
            <div className="w-[50%]">
              <div>
                <input
                  type="text"
                  placeholder="Class Timing *"
                  name="timing"
                  value={formData.timing}
                  required
                  className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins h-[40px]"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div>
                <input
                  type="text"
                  placeholder="Enter Teacher Name *"
                  name="teacher"
                  value={formData.teacher}
                  required
                  className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins h-[40px]"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-[50%] max-w-md mb-6">
              <label
                htmlFor="days"
                className="block cinzel text-lg font-medium text-[#171717] mb-2"
              >
                Select Days Studied
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <label key={day} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="days"
                      value={day}
                      checked={formData.days.includes(day)}
                      onChange={handleChange}
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="text-lg font-medium text-[#171717]">
                      {day}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <br />

          <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
            Guardians Detail
          </h3>
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="text"
              placeholder="Guardian Name *"
              name="guardianName"
              value={formData.guardianName}
              required
              onChange={handleChange}
              className="w-full sm:w-[50%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
            />

            <select
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              required
              className="w-full sm:w-[50%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
            >
              <option value="" disabled>
                Relation with Student *
              </option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="guardian">Guardian</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />

          <div className="w-full max-w-md mb-6">
            <label
              htmlFor="source"
              className="block text-lg font-medium text-[#171717] mb-2"
            >
              Where did you hear about us?
            </label>
            <select
              id="source"
              onChange={handleChange}
              name="hearAboutUS"
              value={formData.hearAboutUS}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Social Media">Facebook</option>
              <option value="Social Media">Youtube</option>
              <option value="Social Media">Instagram</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Google Search">Google Search</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
              Selected Teacher is :{" "}
              {existingStudent
                ? existingStudent.underWhichTeacher
                : "Loading..."}
            </h3>
            <textarea
              placeholder="Describe yourself as a Student"
              required
              name="studentDescription"
              value={formData.studentDescription}
              rows={7}
              onChange={handleChange}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
          </div>
        </div>
        <br />
        <Button value={"Update"} />
      </form>
    </div>
  );
};

export default StudentForm;
