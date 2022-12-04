import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import Login from "../Login/Login";
import useToken from './useToken';


function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}></Login>
    }
    return (
        <>
            <div className="wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<h1>Application</h1>} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/preferences" element={<Preferences />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;