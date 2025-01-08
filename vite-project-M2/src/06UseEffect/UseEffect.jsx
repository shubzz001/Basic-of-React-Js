//! Execute only one time

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount]=useState(0)
//     useEffect(()=>{
//         setCount(count+1)
//     },[])
//   return (
//     <div>UseEffect {count}</div>
//   )
// }

// export default UseEffect



// //! Execute Infinity
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount]=useState(0)
//     useEffect(()=>{
//         setCount(count+1)
//     })
//   return (
//     <h1>UseEffect {count}</h1>
//   )
// }

// export default UseEffect



//! Execute using setTime
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//         setCount(count+1)
//         },2000)
//     })
//   return (
//     <h1>UseEffect {count}</h1>
//   )
// }

// export default UseEffect


// ! Execute using Dependency


// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount]=useState(0)
//     const [Init, setInit]=useState(0)
//     useEffect(()=>{
       
//         setCount(count+2)
        
//     },[Init])
//   return (
//     <>
//     <h1>UseEffect :{count}</h1>
//     <h1 >Init :{Init}</h1>
//     <button onClick={()=>{setInit(Init+1)}} className='btn btn-primary'>Increment Init</button>
//     </>
//   )
// }

// export default UseEffect


//! Using api 
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())  
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);  

  // return (
  //   <div>
  //     <h1>UseEffect</h1>
  //     <ul>
  //       {/*//? data? = conditional chanining which means there will be error then it will stops execuation  */}
  //       {data?.map((item, index) => (
  //         <li key={index}>{item.title}</li>  
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {data?.map((item) => (
        <div
          key={item.id}
          style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <div style={{ padding: "16px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 10px",
                color: "#333",
              }}
            >
              {item.title}
            </h2>
            {/* <p
              style={{
                fontSize: "14px",
                color: "#555",
                margin: "0 0 10px",
              }}
            >
              {item.description}
            </p> */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000",
                margin: "0 0 10px",
              }}
            >
              ${item.price}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#777",
                margin: "0 0 5px",
              }}
            >
              Category: {item.category}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#777",
                margin: "0",
              }}
            >
              Rating: {item.rating.rate} ({item.rating.count} reviews)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default UseEffect;
