import React, { useState } from 'react'

const State = () => {
    //!using String
    const [state, setState]= useState("Shubham")

    //!using Number
    const [count, setCount ]= useState(0)
    
    //!-- Using Function
    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    const reset = () => {
      setCount(0);
    };//!-----------


   

  return (
    <div>
        {console.log(setState)}
        {/* <h1>We are in {state}</h1>
        <button onClick={()=>{setState("Shubzz")}}>Click here</button> */}

        {/* <h1>{count}</h1> */}
        {/* <button className='btn-primary m-2'  onClick={()=>{setCount(count + 1)}}>  Increment</button>
        <button className='btn-primary m-2' onClick={()=>{setCount(count - 1)}}>  Decrement</button>
        <button className='btn-primary m-2' onClick={()=>{setCount(0)}}>  Reset</button> */}

      <button  className='btn btn-primary m-2' onClick={increment}>Increment</button>
      <button  className='btn btn-primary m-2' onClick={decrement}>Decrement</button>
      <button  className='btn btn-primary m-2' onClick={reset}>Reset</button>

    </div>
    
  )
}

export default State