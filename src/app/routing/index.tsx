import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {authState} from '../../features/auth/authSlice';
import { useAppSelector } from "../hooks";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Login from "../pages/auth/Login/Login";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";

const Routing = () => {
    const {isLoggedIn} = useAppSelector(authState);
    return (
        <Routes>
            {
                isLoggedIn
                    ?
                    <Route path="/" element={<DashboardLayout />}>
                        <Route path="" element={<Dashboard />} />
                    </Route>
                    :
                    <Route path="auth" element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<Navigate to={"login"} />} />
                    </Route>
            }
            <Route
                path="*"
                element={<Navigate to={isLoggedIn ? "/" : "/auth/login"} />}
            />
        </Routes>
    )
}

export default Routing
