// import React from 'react'
// import Child from './Child'
// import Child2 from './Child2'
// import Child4_Json from './Child4_Json'
// import JSONasProps  from './JSONasProps.json'
// const AProps = () => {

//     let emp={
//       name:"Rahul",
//       age:25,
//       salary:50000,
//       skills:["html","css","js"]
//     }

//     let course = [
//       {
//         course_id: 1,
//         trainer_img: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
//         course_name: "Web Development",
//         trainer: ["Saytam", "Anish"],
//         duration: "3 months",
//         price: 300,
//         branch: ["New York", "Los Angeles"],
//         languages: ["HTML", "CSS", "JavaScript"]
//       },
//       {
//         course_id: 2,
//         course_name: "Data Science",
//         trainer_img: "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_1280.png",
//         trainer: ["Shubham", "Pranav"],
//         duration: "6 months",
//         price: 500,
//         branch: ["Chicago", "San Francisco"],
//         languages: ["Python", "R", "SQL"]
//       },
//       {
//         course_id: 3,
//         course_name: "Machine Learning",
//         trainer_img: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
//         trainer: ["Eve", "Frank"],
//         duration: "4 months",
//         price: 400,
//         branch: ["Boston", "Seattle"],
//         languages: ["Python", "TensorFlow", "Keras"]
//       }
//     ];
//   return (

//     <div>
//         {/* <div>Hello</div> */}
//         {/* <Child  data={"Shubham"}/> */}

//         {/* //!Props Pasing */}
//         {/* <Child  data={emp}/> */}
//         {/* <Child2 data={course}/> */}
//         {/* <Child4_Json info={JSONasProps}/> */}

//       </div>
//   )
// }

// export default AProps

// import React from "react";
// // import './App.css'
// import Header from "./Screens/Header";
// import Footer from "./Screens/Footer";
// import MainContainer from "./Screens/MainContainer";
// import Child from "./props/Child";
// import Child2 from "./props/Child2";

// function App() {

//   let emp={
//     name:"Rahul",
//     age:25,
//     salary:50000,
//     skills:["html","css","js"]
//   }

//   let course = [
//     {
//       course_id: 1,
//       trainer_img: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
//       course_name: "Web Development",
//       trainer: ["Saytam", "Anish"],
//       duration: "3 months",
//       price: 300,
//       branch: ["New York", "Los Angeles"],
//       languages: ["HTML", "CSS", "JavaScript"]
//     },
//     {
//       course_id: 2,
//       course_name: "Data Science",
//       trainer_img: "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_1280.png",
//       trainer: ["Shubham", "Pranav"],
//       duration: "6 months",
//       price: 500,
//       branch: ["Chicago", "San Francisco"],
//       languages: ["Python", "R", "SQL"]
//     },
//     {
//       course_id: 3,
//       course_name: "Machine Learning",
//       trainer_img: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
//       trainer: ["Eve", "Frank"],
//       duration: "4 months",
//       price: 400,
//       branch: ["Boston", "Seattle"],
//       languages: ["Python", "TensorFlow", "Keras"]
//     }
//   ];
//   return (
//     <div>
//       {/* <div>Hello</div> */}
//       <Header />
//       {/* <Child  data={"Shubham"}/> */}

//       {/* //!Props Pasing */}
//       {/* <Child  data={emp}/> */}
//       <Child2 data={course}/>




//       {/* <Child  data="Shubham"/> */}
//       {/* <MainContainer />
//     <Footer /> */}
//     </div>
//   );
// }

// export default App;

//! Image as a props
//   import React from 'react'
// import Child3_image from './props/Child3_image'

//   const App = () => {
//     return (
//       <div>
//         <Child3_image pic="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"/>
//       </div>
//     )
//   }

//   export default App

//! JSON file as a Props
// import React from 'react'
// import Child4_Json from './03props/Child4_Json'
// import JSONasProps  from './03props/JSONasProps.json'
// import "./App.css"

// const App = () => {
//   return (
//     <div>
//       <Child4_Json info={JSONasProps}/>
//     </div>
//   )
// }
// export default App

//!Prpos Drilling
import React from 'react'
import Child5_propDrill from './Child5_propDrill';
// import Child5_propDrill from './03props/Child5_propDrill'

const App = () => {

  let course = [
    {
      course_id: 1,
      trainer_img: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
      course_name: "Web Development",
      trainer: ["Saytam", "Anish"],
      duration: "3 months",
      price: 300,
      branch: ["New York", "Los Angeles"],
      languages: ["HTML", "CSS", "JavaScript"]
    },
    {
      course_id: 2,
      course_name: "Data Science",
      trainer_img: "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_1280.png",
      trainer: ["Shubham", "Pranav"],
      duration: "6 months",
      price: 500,
      branch: ["Chicago", "San Francisco"],
      languages: ["Python", "R", "SQL"]
    },
    {
      course_id: 3,
      course_name: "Machine Learning",
      trainer_img: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
      trainer: ["Eve", "Frank"],
      duration: "4 months",
      price: 400,
      branch: ["Boston", "Seattle"],
      languages: ["Python", "TensorFlow", "Keras"]
    }
  ];
  return (
    <div>
      <Child5_propDrill info={course} />
    </div>
  )
}

export default App