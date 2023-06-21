import React, { useState } from "react";
import "./Navbar.module.css";
import "./Notice.module.css";
import { useNavigate } from "react-router-dom";
const DisplayBoard = () => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(`/${route}`);
  };
  return (
    <div>
      <div className="page-content container note-has-grid my-4 bg-light p-3">
        <h4 className="text-center my-4">Online Display Board</h4>
        {( JSON.parse(localStorage.getItem("data"))?.staff?.isAdmin && 
          <button
            type="button"
            class="btn btn-sm btn-primary mb-3 px-2 py-1"
            onClick={() => {
              handleRoute("AddData");
            }}
          >
            Add new notice
          </button>
        )}
        <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
            <div
              className="col-md-4 mb-2 single-note-item all-category Card_card_kGSJn"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("DepartmentNotices");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="departmentNotice"
                >
                  Department Notices
                  <i className="point fa fa-circle ml-1 font-10" />
                </h5>
                {/* <p className="note-date font-12 text-muted">11 March 2009</p> */}
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted mt-1"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Department Notices : Related to department.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2 single-note-item all-category note-important"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("PlacementNotices");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="placementNotice"
                >
                  Placement Notices
                  <i className="point fa fa-circle ml-1 font-10" />
                </h5>
                {/* <p className="note-date font-12 text-muted">01 April 2002</p> */}
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted mt-1"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Placement Notices : Apply for Placements.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2 single-note-item all-category note-social"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("PlacementResult");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="placementResult"
                >
                  Placement Results
                  <i className="point fa fa-circle ml-1 font-10 mt-1" />
                </h5>
                {/* <p className="note-date font-12 text-muted">19 October 2020</p> */}
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Placement Result : Successfully Hired.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2 single-note-item all-category note-business"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("InternalCirculars");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="internalCircular"
                >
                  Internal Circulars
                  <i className="point fa fa-circle ml-1 font-10" />
                </h5>
                {/* <p className="note-date font-12 text-muted">02 January 2000</p> */}
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Notice for all members in department.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2 single-note-item all-category note-social "
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("ExternalCirculars");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="externalCircular"
                >
                  External Circulars
                  <i className="point fa fa-circle ml-1 font-10 mt-1" />
                </h5>
                {/* <p className="note-date font-12 text-muted">01 August 1999</p> */}
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Notices from whole College for all members.
                  </p>
                </div>
              </div>
            </div>
            {/* <div
              className="col-md-4 mb-2 single-note-item all-category note-important"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRoute("TimeTable");
              }}
            >
              <div className="card card-body bginfo text-dark fw-bold">
                <span className="side-stick" />
                <h5
                  className="note-title text-truncate w-75 mb-0 fw-bold"
                  data-noteheading="timeTable"
                >
                  Time Table
                  <i className="point fa fa-circle ml-1 font-10 mt-1" />
                </h5>
                <p className="note-date font-12 text-muted">21 January 2015</p>
                <div className="note-content mt-2">
                  <p
                    className="note-inner-content text-muted"
                    data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                  >
                    Time Table for Faculty / Student
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
