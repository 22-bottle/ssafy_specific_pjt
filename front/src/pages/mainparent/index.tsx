import React from "react";
import { Outlet } from "react-router-dom";

const MainParent: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MainParent;