//vite-project-M2\src\13CRUD\CRUD.jsx
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import CHome from './CHome'
import CCreate from './CCreate'
import CRead from './CRead'
import CUpdate from './CUpdate'

const CRUD = () => {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {/* <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f0f0f0' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
                <Link to="/Ccreate" style={{ textDecoration: 'none', color: 'blue' }}>Create</Link>
                <Link to="/Cread" style={{ textDecoration: 'none', color: 'blue' }}>Read</Link>
                <Link to="/Cupdate" style={{ textDecoration: 'none', color: 'blue' }}>Update</Link>
            </nav> */}
            <Routes>
                <Route path="/" element={<CHome />} />
                <Route path="/Ccreate" element={<CCreate />} />
                <Route path="/Cread/:id" element={<CRead />} />
                <Route path="/Cupdate/:id" element={<CUpdate />} />
            </Routes>

        </BrowserRouter>

    )
}

export default CRUD