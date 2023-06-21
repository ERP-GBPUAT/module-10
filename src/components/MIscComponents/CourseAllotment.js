import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const CourseAllotment = () => {
  const navigate = useNavigate();
  const batches = [
    { value: 2019, label: "2019" },
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
  ];
  const courses = [
    { value: "TIT-101", label: "TIT-101" },
    { value: "TIT-102", label: "TIT-102" },
    { value: "TIT-104", label: "TIT-104" },
    { value: "TIT-103", label: "TIT-103" },
    { value: "TIT-105", label: "TIT-105" },
  ];
  const [error, setError] = useState("");
  const [batch, setBatch] = useState();
  const [course, setCourse] = useState();
  //   const [subject, setSubject] = useState([]);
  const [sem, setSem] = useState();
  const handleOnChange = (e) => {
    setSem(e.target.value);
  };
  const handleSemester = async (e) => {
    e.preventDefault();
    if (!batch || !sem || !course) {
      setError("All fields are required");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const subject = course.map((op) => op.value);
      console.log(subject);
      const res = await fetch("http://localhost:8080/sem/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          subjectIds: subject,
          session: batch.value,
          number: sem,
        }),
      });
      const json = await res.json();
      if (json.msg === "success") {
        console.log(json.data);
        navigate(`/faculty/${JSON.parse(localStorage.getItem("data"))?.faculty?.id}`);
      }
      else{
        setError(json.error);
      setTimeout(() => {
        setError("");
      }, 3000);
      }
    }
  };
  return (
    <div>
      <div class="row t-10">
        <div style={{ marginBottom: "100px" }}>
          <h2 className="text-center my-3 text-decoration-underline">
            G. B. Pant University of Agriculture and Technology
          </h2>
          <h4 className="text-center my-1">Course registration card</h4>
        </div>
        <div class="mx-auto col-10 col-md-8 col-lg-6 ">
          <form class="form-example my-3" onSubmit={handleSemester}>
            {error ? (
              <div className="mt-3 text-danger fs-5">{error}</div>
            ) : (
              <div></div>
            )}
            <div class="form-group">
              <label for="exampleFormControlSelect1" className="mt-3">
                Choose session
              </label>
              <Select options={batches} value={batch} onChange={setBatch} />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1" className="mt-3">
                Semester
              </label>
              <select
                id="inputState"
                value={sem}
                class="form-control"
                onChange={handleOnChange}
              >
                <option value={""}>Choose Semester...</option>
                <option value={1}>Sem I</option>
                <option value={2}>Sem II</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2" className="mt-3">
                Course Nos.
              </label>
              <Select
                options={courses}
                isMulti
                onChange={setCourse}
                value={course}
                placeholder={"Choose All the Course codes"}
              />
            </div>
            <div class="form-group">
              <button type="submit" className="btn btn-primary">
                Register Semester
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseAllotment;
