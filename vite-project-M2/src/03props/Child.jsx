import React from 'react'

//!Destructring
// const Child = ({data}) => {
const Child = (props) => {

  //!
  // const Child = (props) => {
  return (
    <>

      {/* //! */}
      {/* <div>{props.data}</div> */}
      {/* <h1>{props.data.name}</h1>
      <h2>{props.data.age}</h2>
      <h3>{props.data.salary}</h3> */}

      {/* //!Destructring */}
      {/* <div>{data}</div> */}
      {/* <h3>Name:  {data.course_name}</h3>
     <h2>Age: {data.age}</h2>
     <h3>Salary: {data.salary}</h3>
     {data.skills.map((v,i)=>(
         <h3 key={i}>Skills: {v}</h3>
     ))} */}
      {/* <h3>Skills: {data.skills}</h3> */}

    </>
  )
}

export default Child
//! Child.js
// import React from 'react'

// const Child = ({data}) => {
//   return (
//     <h1>{data}</h1>
//   )
// }

// export default Child