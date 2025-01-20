import React from 'react'

const apiUrl ="http://localhost:5000/";
const token = '';

export const axiosInstance = axios.create([
    baseURL : apiUrl,
    headers :{
        // 'Authorization': 'Bearer ${token}'
    }
])