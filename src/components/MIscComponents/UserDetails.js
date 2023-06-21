import React from "react";

const UserDetails = ({
  faculty,
  user,
  isStudent}) => {
    const handleChange=()=>{
      console.log("data");
    }
  return (
    <div className="card bg-white shadow">
      <div className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0 text-oliveGreen">My account</h3>
          </div>
          <div className="col-4 text-right">
            {/* {inputDisabled ? (
              <Link
                onClick={() => handleInputDisabled(true)}
                className="btn btn-sm btn-primary"
              >
                Edit Profile
              </Link>
            ) : (
              <Link
                onClick={() => handleInputDisabled(false)}
                className="btn btn-sm btn-primary"
              >
                Update
              </Link>
            )} */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="">
            <h6 className="heading-small text-darkOliveGreen mb-4">
              User information
            </h6>
          </div>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Name
                  </label>
                  <input
                  disabled={true}
                    onChange={handleChange}
                    type="text"
                    id="input-username"
                    className="form-control form-control-alternative"
                    placeholder="Username"
                    value={user?.name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <input
                  disabled={true}
                    onChange={handleChange}
                    type="email"
                    id="input-email"
                    className="form-control form-control-alternative"
                    value={user?.email}
                    placeholder="jesse@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    {isStudent ? "Student Id" : "Faculty Id"}
                  </label>
                  <input
                  disabled={true}
                    onChange={handleChange}
                    type="text"
                    id="input-first-name"
                    className="form-control form-control-alternative"
                    placeholder="First name"
                    value={faculty?.id}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="Qualification">
                    {isStudent ? "Advisor id" : "Qualification"}
                  </label>
                  <input
                  disabled={true}
                    onChange={handleChange}
                    type="text"
                    id="Qualification"
                    className="form-control form-control-alternative"
                    placeholder="Qualification"
                    value={
                      isStudent ? faculty?.FacultyId : faculty?.qualification
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Other information
          </h6>
          <div className="pl-lg-4">
            {isStudent ? (
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" htmlFor="input-phone">
                      Batch
                    </label>
                    <input
                    disabled={true}
                      onChange={handleChange}
                      type="text"
                      id="input-phone"
                      className="form-control form-control-alternative"
                      placeholder="Phone number"
                      value={faculty?.batch}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-designation"
                    >
                      Father's Name
                    </label>
                    <input
                    disabled={true}
                      onChange={handleChange}
                      type="text"
                      id="input-designation"
                      className="form-control form-control-alternative"
                      placeholder="Designation"
                      value={faculty?.fatherName}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="input-department"
                    >
                      Mother's Name
                    </label>
                    <input
                    disabled={true}
                      onChange={handleChange}
                      placeholder="eg: Information Technology"
                      type="text"
                      id="input-department"
                      className="form-control form-control-alternative"
                      value={faculty?.motherName}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="website-link"
                    >
                      {"Website Link"}
                    </label>
                    <input
                    disabled={true}
                      onChange={handleChange}
                      id="website-link"
                      className="form-control form-control-alternative"
                      placeholder="Website Link"
                      value={faculty?.bioWebLink}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-phone">
                    Phone number
                  </label>
                  <input
                  disabled={true}
                    onChange={handleChange}
                    type="text"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Phone number"
                    value={user?.phoneNo}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-designation"
                  >
                    {isStudent ? "Degree" : "Designation"}
                  </label>
                  <input
                  disabled={true}
                    
                    onChange={handleChange}
                    type="text"
                    id="input-designation"
                    className="form-control form-control-alternative"
                    placeholder="Designation"
                    value={isStudent ? faculty?.degree : faculty?.designation}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-department"
                  >
                    {isStudent ? "Branch" : "Department"}
                  </label>
                  <input
                  disabled={true}
                    
                    onChange={handleChange}
                    placeholder="eg: Information Technology"
                    type="text"
                    id="input-department"
                    className="form-control form-control-alternative"
                    value={
                      isStudent ? faculty?.discipline : faculty?.department
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Research Intrests
          </h6>
          <div className="pl-lg-4">
            {isStudent ? (
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Hostel Name
                    </label>
                    <input
                    disabled={true}
                      
                      onChange={handleChange}
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Username"
                      value={faculty?.hostel}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">
                      Room No.
                    </label>
                    <input
                    disabled={true}
                      
                      onChange={handleChange}
                      type="email"
                      id="input-email"
                      className="form-control form-control-alternative"
                      value={faculty?.roomNo}
                      placeholder="jesse@example.com"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="form-group focused">
                <label className="form-control-label">Research interest</label>
                <textarea
                  disabled={true}
                  rows="4"
                  className="form-control form-control-alternative"
                  placeholder="A few words about you ..."
                  value={faculty?.researchInterests}
                ></textarea>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
