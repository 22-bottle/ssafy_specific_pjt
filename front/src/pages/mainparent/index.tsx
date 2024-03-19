import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './navbar';

const MainParent: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainParent;