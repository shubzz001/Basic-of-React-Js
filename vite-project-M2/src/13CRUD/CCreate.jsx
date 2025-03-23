import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CCreate = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user", values).then((v) => {
      console.log("V", v)
    })
    navigate("/")
    // console.log("User Data:", formData);


  };
  // const send = (e) => {
  //   e.preventDefault();
  //   axios.post("url", values).then((v) => {

  //   })
  // }

  return (
    <div className="p-4 mt-4" style={{ backgroundColor: "#dbdbdb" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Create User</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <form className="bg-light p-4 shadow rounded" onSubmit={handleSubmit} style={{ width: "500px" }}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              // value={formData.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={(e) => setValues({ ...values, email: e.target.value })}


              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              className="form-control"
              onChange={(e) => setValues({ ...values, contact: e.target.value })}

              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>

        </form>
      </div>

    </div >
  );
};

export default CCreate;
