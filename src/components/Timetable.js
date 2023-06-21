import React, { useState } from 'react'
import Select from 'react-select';

const Timetable = () => {
  const batches = [
    { value: 2019, label: "2019" },
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" }
  ];
  const courses = [
    { value: 'TIT-101', label: 'TIT-101' },
    { value: 'TIT-102', label: 'TIT-102' },
    { value: 'TIT-104', label: 'TIT-104' },
    { value: 'TIT-103', label: 'TIT-103' },
    { value: "TIT-105", label: "TIT-105" }
  ];
  const [batch,setBatch] = useState("")
    const handleBatchChange=(batch)=>{
        setBatch(batch)
    }
  const [course,setCourse] = useState([])
    const handleCourseChange=(course)=>{
        setCourse({...course,course})
    }
    const [sem,setSem] = useState()
    const handleOnChange = (e)=>{
      setSem(e.target.value)
    }
  return (
    <div>
        <div class="row t-10">
  <div class="mx-auto col-10 col-md-8 col-lg-6 ">

      <form class="form-example my-3" action="" method="post">
  <div class="form-group">
    <label for="exampleFormControlSelect1" className='mt-3'>Batch</label>
    <Select options={batches} value={batch} onChange={handleBatchChange}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1" className='mt-3'>Semester</label>
    <select id="inputState" value={sem} class="form-control" onChange={handleOnChange}>
      <option value={""}>Choose Semester...</option>
      <option value={1}>Sem I</option>
      <option value={2}>Sem II</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2" className='mt-3'>Course</label>
    <Select options={courses} isMulti={true} onChange={handleCourseChange} value={course} />
    </div>
</form>
</div>
</div>
    </div>
  )
};

export default Timetable
