import logo from "./logo.svg";
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMain from "./components/NavbarMain";
import Timetable from "./components/Timetable";
import Notices from "./components/DisplayBoard";
import DisplayBoard from "./components/DisplayBoard";
import DepartmentNotice from "./components/DepartmentNotice";
import PlacementNotices from "./components/PlacementNotices";
import PlacementResult from "./components/PlacementResult";
import InternalCircular from "./components/InternalCircular";
import ExternalCirculars from "./components/ExternalCirculars";
import AddData from "./components/AddData";
import { useEffect } from "react";
import UserProfile from "./components/UserProfile";
import CourseAllotment from "./components/MIscComponents/CourseAllotment";
import SemesterCourses from "./components/MIscComponents/SemesterCourses";

function App() {
  useEffect(() => {
    const recMsg = (e) => {
      e.preventDefault();
      console.log("data", e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem("token", e.data.token);
      localStorage.setItem("data", e.data.user);
    };
    window.addEventListener("message", recMsg);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);
  return (
    <BrowserRouter>
      <div>
        <NavbarMain />
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/" element={<DisplayBoard />} />
          <Route path="/faculty/:facultyId" element={<UserProfile />} />
          <Route path="/semesterCourses" element={<SemesterCourses />} />
          <Route path="/student/:studentId" element={<UserProfile />} />
          <Route path="/courseAllotment" element={<CourseAllotment />} />
          <Route path="/DepartmentNotices" element={<DepartmentNotice />} />
          <Route path="/PlacementNotices" element={<PlacementNotices />} />
          <Route path="/PlacementResult" element={<PlacementResult />} />
          <Route path="/InternalCirculars" element={<InternalCircular />} />
          <Route path="/ExternalCirculars" element={<ExternalCirculars />} />
          <Route path="/AddData" element={<AddData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
