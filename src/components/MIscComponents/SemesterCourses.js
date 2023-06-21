import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
import "../FacultyProfile.css";
import Column from "./Column";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const SemesterCourses = () => {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    data: [],
    error: "",
  });
  const [session, setSession] = useState();
  const [sem, setSem] = useState();
  const [table, setTable] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const sessions = [
    { value: "2019", label: "2019-20" },
    { value: "2020", label: "2020-21" },
    { value: "2021", label: "2021-22" },
    { value: "2022", label: "2022-23" },
    { value: "2023", label: "2023-24" },
  ];
  const sems = [
    { value: "1", label: "Sem I" },
    { value: "2", label: "Sem II" },
  ];
  const handleDSubmit = async () => {
    console.log(sem, session);
    setTable(true);
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const res = await fetch(`http://localhost:8080/sem/getCurrentSem`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      const json = await res.json();
      console.log(json);
      if (json.msg === "success") {
        let filterData = json.data?.filter((c) => {
          return (c.number === sem.value) & (c.session === session.value);
        });
        dispatch({ type: "FETCH_SUCCESS", payload: filterData });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
  };
  console.log(data);
  return (
    <div>
      {!table && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "40px",
          }}
        >
          <div style={{ marginBottom: "100px" }}>
            <h2 className="text-center my-3 text-decoration-underline">
              G. B. Pant University of Agriculture and Technology
            </h2>
            <h4 className="text-center my-1">
              Course registration card
            </h4>
          </div>
          <div className="row" style={{ display:"flex",justifyContent:"center",width:"50%" }}>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom03">Session:</label>
              <Select
                className="form-control form-control-lg p-0"
                id="validationCustom03"
                name="activity"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontSize: "18px",
                    margin: "3px",
                  }),
                }}
                placeholder="Choose session"
                onChange={setSession}
                options={sessions}
                value={session}
              />
              {/* <div className="invalid-feedback">Please provide an activity.</div>
               */}
            </div>
          </div>
          <div className="row" style={{ display:"flex",justifyContent:"center",width:"50%" }}>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom04">Semester:</label>
              <Select
                className="form-control form-control-lg p-0"
                id="validationCustom04"
                name="activity"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontSize: "18px",
                    margin: "3px",
                  }),
                }}
                placeholder="Choose semester"
                onChange={setSem}
                options={sems}
                value={sem}
              />
              {/* <div className="invalid-feedback">Please provide an activity.</div>
               */}
              <button className="btn btn-primary mt-4" onClick={handleDSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {table &&
        (loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error Occured</div>
        ) : (
          <div className="d-flex justify-content-center flex-column">
            <div className="container">
              <div style={{ marginBottom: "100px" }}>
                <h2 className="text-center my-3 text-decoration-underline">
                  G. B. Pant University of Agriculture and Technology
                </h2>
                <h4 className="text-center my-1">
                  Course registration card - {session.label} , {sem.label}
                </h4>
              </div>
              <div className="container">
                <div className="row mt-3">
                  <Column
                    label={"Name"}
                    value={JSON.parse(localStorage.getItem("data"))?.user?.name}
                  />
                  <Column
                    label={"Email"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.user?.email
                    }
                  />
                </div>
                <div className="row mt-3">
                  <Column
                    label={"Designation"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.faculty
                        ?.designation
                    }
                  />
                  <Column
                    label={"Department"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.faculty
                        ?.department
                    }
                  />
                </div>
                <div className="row mt-3">
                  <Column
                    label={"Faculty Id"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.faculty?.id
                    }
                  />
                  <Column
                    label={"Qualification"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.faculty
                        ?.qualification
                    }
                  />
                </div>
                <div className="row mt-3">
                  <Column
                    label={"Address"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.user?.address
                    }
                  />
                  <Column
                    label={"Phone"}
                    value={
                      JSON.parse(localStorage.getItem("data"))?.user?.phoneNo
                    }
                  />
                </div>
              </div>
              <div className="container mt-4">
                {data.length ? (
                  <table class="table table-striped p-1 table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Course No</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[0]?.subjects?.map((subject) => {
                        return (
                          <tr key={subject?.code}>
                            <td style={{ width: "15%", marginLeft: "5px" }}>
                              {subject?.code}
                            </td>
                            <td>{subject?.name}</td>
                            <td>{subject?.credits}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="d-flex justify-content-center text-secondary fs-2 my-5">
                    No course Registered this semester
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SemesterCourses;
