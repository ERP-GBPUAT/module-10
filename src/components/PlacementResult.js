import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, notices: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const PlacementResult = () => {
  const navigate = useNavigate();
  const [{ loading, error, notices }, dispatch] = useReducer(reducer, {
    loading: true,
    notices: [],
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const res = await fetch(
          `http://localhost:8080/notices/getNoticeByType`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ type: "Placement result" }),
          }
        );
        const json = await res.json();
        console.log(json);
        if (json.msg === "success") {
          dispatch({ type: "FETCH_SUCCESS", payload: json.data });
        }
      } catch (err) {
        console.log(err);
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  const handleDownload = async(id)=>{
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const res = await fetch(
        `http://localhost:8080/notices/getNoticePdf/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/pdf"
          },
        }
      );
      const json = await res.blob();
      const pdfUrl = URL.createObjectURL(json)
      handleDownloadPdf(pdfUrl)
      console.log(json);
        dispatch({ type: "FETCH_PDF_SUCCESS", payload: pdfUrl });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
  }
  const handleDownloadPdf = (pdfData) => {
      const link = document.createElement('a');
      link.href = pdfData;
      link.download = 'document.pdf';
      link.click();
  };
  return (
    loading?<div>Loading...</div>:
    <div>
      <div className="page-content container note-has-grid mt-5 bg-light p-3">
        <h3 class="card-header d-flex justify-content-between align-items-center mb-2 p-3">
          Placement result
        </h3>
        <div className="overflow-auto ">
        {/* <a href={pdfData} download="document.pdf">Download</a> */}
          <ul class="list-group  mb-2">
            {notices.map((notice) => {
              return (
                <li
                  key={notice?.id}
                  class="list-group-item d-flex p-2 justify-content-between align-items-center"
                >
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div
                      class="name w-100 px-3"
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                      value={"topic"}
                    >
                      {notice?.title}
                      <div>{notice?.description}</div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleDownload(notice?.id)}
                      >
                        Download notice
                      </button>
                    </div>
                    {/* <button class="btn btn-sm btn-info pull-left remove-item m-1">Update</button> */}
                    {/* {JSON.parse(localStorage.getItem("data"))?.staff
                      ?.isAdmin && (
                      <button class="btn btn-sm btn-danger pull-left m-1">
                        Delete
                      </button>
                    )} */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlacementResult;
