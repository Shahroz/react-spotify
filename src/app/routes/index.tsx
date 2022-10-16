import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { useAppSelector } from "../hooks";
import Login from "../layout/auth/login/Login";
import AuthLayout from "./auth";
import {
    authState
} from '../../features/auth/authSlice';
import Dashboard from "../layout/dashboard/Dashboard";
import DashboardLayout from "./dashboard";

const Layout = () => {
    const {isLoggedIn} = useAppSelector(authState);
    return (
        <Routes>
            {
                isLoggedIn
                    ? (
                        <Route path="/" element={<DashboardLayout />}>
                            <Route path="" element={<Dashboard />} />
                        </Route>
                    )
                    : (
                        <Route path="auth" element={<AuthLayout />}>
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<Navigate to={"login"} />} />
                        </Route>
                    )
            }
        </Routes>
    )
}

export default Layout