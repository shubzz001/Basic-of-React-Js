import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {
    const [data, setData] = useState([]); // Initialize as an empty array

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then((response) => {
                console.log(response.data.recipes);
                setData(response.data.recipes);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []); 

    return (
        <div>
            {data.length > 0 ? (
                data.map((v, index) => (
                    <h2 key={index}>{v.name}</h2> 
                ))
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
};

export default Axios;
