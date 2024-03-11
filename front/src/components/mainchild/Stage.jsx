import React from "react";
import { Outlet } from "react-router-dom";
const stage= () => {
    
    return (
        <div>
        <Outlet/>
    </div>
    );
};

export default stage;