import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AddData = () => {
  const navigate = useNavigate()
  const [notice, setNotice] = useState({
    department: "",
    date:"",
    type: "",
  });
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()
  const [department,setDepartment] = useState("")
  const [error,setError] = useState("")
  const [type,setType] = useState("")
  const [file, setFile] = useState("");
  const handleOnChange = (e)=>{
    setNotice({...notice,[e.target.name]:e.target.value})
  }
  const setDepartmentF = department=>{
    setDepartment(department)
    setNotice({...notice,department:department.value})
  }
  const setTypeF = type=>{
    setType(type)
    setNotice({...notice,type:type.value})
  }
  const handleFile = (e)=>{
    setFile(e.target.files[0])
  }
  const handleFormSubmit = async(data)=>{
    try {
      console.log(notice,data);
      const formData =new FormData();
      formData.append('file',file)
      formData.append('data',JSON.stringify({...notice,title:data.title,description:data.description}))
      console.log("formData",formData.getAll("data"));
      const res = await fetch('http://localhost:8080/notices/addNotice',{
        method:"POST",
        headers: {
          'token':localStorage.getItem('token')
        },body:formData
      });
      const json = await res.json();
      if(json.msg==="success"){
        console.log(json);
        navigate("/")
      }
      else{
        console.log(json.error);
        setError(json.error)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const branches = [
    { value: "Information technology", label: "Information technology" },
    { value: "Computer engineering", label: "Computer engineering" },
    { value: "Electrical engineering", label: "Electrical engineering" },
    { value: "Mechanical engineering", label: "Mechanical engineering" },
    { value: "Civil engineering", label: "Civil engineering" },
    {
      value: "Electronics and Communication engineering",
      label: "Electroncics and Communication engineering",
    },
    {
      value: "Industrial and Production engineering",
      label: "Industrial and Production engineering",
    },
    { value: "Agriculture engineering", label: "Agriculture engineering" },
  ];
  const types = [
    { value: "Internal notice", label: "Internal notice" },
    { value: "External notice", label: "External notice" },
    { value: "Placement notice", label: "Placement notice" },
    { value: "Placement result", label: "Placement result" },
    { value: "Department notice", label: "Department notice" }
  ];
  
  return (
    <div className="page-content container note-has-grid my-4 ">
      <h5 class="card-header d-flex justify-content-center align-items-center mb-2 fw-bold">
        Add New Notice
      </h5>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="border border-2 rounded p-3 bg-light">
        <div class="my-1">
          <label for="exampleFormControlInput1" class="form-label my-3">
            Topic
          </label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="topic"
            placeholder=""
            {...register("title",{
              required:{value:true,message:"This field is required"},
              pattern:{value:/^[a-zA-z]+[a-zA-Z0-9$%@#&(){},."'?/:;]*/,message:"This field cannot contain only numbers or cannot start from numeric values"},
              minLength:{value:5,message:"Title is too short"},
              maxLength:{value:30,message:"Title is too long"}
            })}
          />
          <div className="text-danger mt-2">{errors?.title?.type && <div>{errors.title?.message}</div> }</div>
        </div>
        <div class="my-1">
          <label for="detail" class="form-label my-3">
            Description
          </label>
          <textarea
          name="description"
            class="form-control"
            id="detail"
            rows="3"
            {...register("description",{
              required:{value:true,message:"This field is required"},
              pattern:{value:/^[a-zA-z]+[a-zA-Z0-9$%@#&(){},."'?/:;]*/,message:"This field cannot contain only numbers or cannot start from numeric values"},
              minLength:{value:15,message:"Title is too short"},
              maxLength:{value:200,message:"Title is too long"}
            })}
          ></textarea>
          <div className="text-danger mt-2">{errors?.description?.type && <div>{errors.description?.message}</div> }</div>

        </div>
        <div className="my-1">
          <label for="detail" class="form-label my-3">
            Date
          </label>
          <input
          value={notice.date}
          onChange={handleOnChange}
          name="date"
            type="date"
            class="form-control"
            id="topic"
            placeholder=""
            required
          />
        </div>
        <div className="my-1">
          <label for="detail" class="form-label mt-3 ">Department</label>
          <Select options={branches} onChange={setDepartmentF} value={department} />
        </div>
        <div className="my-1">
          <label for="detail" class="form-label mt-3 ">Type of Notice</label>
          <Select options={types} onChange={setTypeF} value={type} />
        </div>
        <div className="my-1">
          <label for="detail" class="form-label mt-3 ">
            File Proof
          </label>
          <input type="file" onChange={handleFile} placeholder="upload notice image/pdf" className="form-control" />
        </div>
        <button type="submit" class="btn btn-sm btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
