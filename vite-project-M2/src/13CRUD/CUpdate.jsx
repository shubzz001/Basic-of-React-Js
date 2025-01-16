import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CUpdate = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`)
      .then((v) => {
        setValues(v.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load user details");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/user/${id}`, values)
      .then(() => {
        // Navigate to CHome after the API call is successful
        navigate("/")
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };


  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 mt-4" style={{ backgroundColor: "#dbdbdb" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Update User</h2>
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
              value={values.name}
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
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="form-control"
              value={values.contact}
              onChange={(e) => setValues({ ...values, contact: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CUpdate;
