import {createContext, useEffect, useState} from 'react'

export const context=createContext();

import React from 'react'

const ContextApi = ({children}) => {
    let emp={
        name:"Rahul",
        age:25,
        salary:50000,
        skills:["html","css","js"]
      }


      const [product, setProduct] = useState([]);
      
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
              .then((res) => res.json())
              .then((product) => {
                console.log(product); // Logs the fetched product array
                setProduct(product);
              })
              .catch((error) => console.error('Error fetching data:', error));
          }, []);

  return (
    // !--- String
    // <context.Provider value={"Shubham"}>
    //!--- Object Passing
    // <context.Provider value={emp}>
    //!--- API Passing
    <context.Provider value={product}>
      {children}
    </context.Provider>
  )
}

export default ContextApi
