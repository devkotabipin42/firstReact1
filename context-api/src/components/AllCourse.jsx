import React from 'react'
import Course from './Course'

const AllCourse = (props) => {
  console.log(props.courseData);
  
  
  return (
    <div>
      AllCourses
      <Course />
     
    </div>
  )
}

export default AllCourse
