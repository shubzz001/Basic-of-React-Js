import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CHome = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To track errors

    useEffect(() => {
        axios
            .get("http://localhost:5000/user")
            .then((response) => {
                console.log(response.data);
                setData(response.data); // Update state with API data
                setLoading(false); // Stop loading
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch data"); // Set error message
                setLoading(false); // Stop loading
            });
    }, []); // Dependency array ensures this runs only once

    const handleCreate = () => {
        alert("Create new user");
        // Implement your create functionality here
    };
    function handleDelete(id) {
        let confirmDelete = window.confirm('Are you sure you want to delete?');
        if (confirmDelete) {
            axios.delete(`http://localhost:5000/user/${id}`).then(() => {
                window.location.reload();
            });
        }
    }
    return (
        <div className="p-5 mt-4">
            <Link
                to={"/Ccreate"}
                className="btn btn-primary mb-3">
                Create New User
            </Link>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="softui-table shadow-lg rounded p-3 bg-light">
                    <table className="table table-bordered table-hover table-striped" style={{ border: '1px solid black' }}>
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <Link to={`/Cupdate/${user.id}`} className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </Link>
                                        <Link to={`/Cread/${user.id}`} className="btn btn-primary   ">
                                            Read
                                        </Link>

                                        <button type="button" className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CHome;
