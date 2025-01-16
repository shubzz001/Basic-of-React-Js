import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CRead = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // For navigation
  const [user, setUser] = useState(null); // Store user details
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch user details on mount
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((response) => {
        setUser(response.data); // Set the user data
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);
        setError("Failed to fetch user details"); // Set error message
        setLoading(false); // Stop loading
      });
  }, [id]); // Dependency array ensures it re-runs if `id` changes

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>{error}</p>; // Show error message

  return (
    <div className=" p-4 mt-4" style={{
      display: "flex",
      flexDirection: "column", alignItems: 'center', justifyContent: 'center'
    }}>
      <h2 className="mb-4">User Details</h2>
      {
        user && (
          <div className="card shadow-sm p-3 bg-light rounded">
            <div className="card-body">
              <h5 className="card-title">Name: {user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Contact: {user.contact}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/Cupdate/${id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(-1)} // Go back to the previous page
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default CRead;
