import React from 'react';

const Child2 = ({ data }) => {
  return (
    <div>
      <h2>Courses List</h2>
      {data.map((course) => (
        <div key={course.course_id} style={{ borderBottom: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{course.course_name}</h3>
          <p><strong>Course ID:</strong> {course.course_id}</p>
          <img src={course.trainer_img} alt='...' style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }}/>
          <p><strong>Trainers:</strong> {course.trainer.join(", ")}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Price:</strong> 💲{course.price}</p>
          <p><strong>Branches:</strong> {course.branch.join(", ")}</p>
          <p><strong>Languages:</strong> {course.languages.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Child2;
