import React, { useState } from "react";
import "./from.css";

const From = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [degree, setDegree] = useState("");
  const [formData, setFromData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
      gender,
      degree,
    };
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setDegree("");
    setFromData([...formData, data]); 
    console.log(data); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="heading">CONTACT FORM</h1>
        <div className="card">

          <label className="label">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="input" 
            placeholder="Enter Name" 
          />

          <label className="label">Email</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            className="input" 
            placeholder="Enter Email" 
          />

          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input" 
            placeholder="Enter Password" 
            aria-label="Password" 
          />

          <label className="label">Gender</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                value="Male" 
                checked={gender === "Male"} 
                onChange={(e) => setGender(e.target.value)} 
              />
              Male
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                value="Female" 
                checked={gender === "Female"} 
                onChange={(e) => setGender(e.target.value)} 
              />
              Female
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                value="Other" 
                checked={gender === "Other"} 
                onChange={(e) => setGender(e.target.value)} 
              />
              Other
            </label>
          </div>

          <label className="label">Select Degree</label>
          <select 
            value={degree} 
            onChange={(e) => setDegree(e.target.value)} 
            className="input">
            <option value="" disabled>Select your degree</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>

          <input type="submit" className="button" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default From;
