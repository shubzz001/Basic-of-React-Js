import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const nameRef = useRef(); // Ref for the Name input

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus(); // Focus the Name input
      nameRef.current.style.backgroundColor = "lightblue"; // Change background color
    }
  }, []);

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRef} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
    </div>
  );
};

export default UseRef;
