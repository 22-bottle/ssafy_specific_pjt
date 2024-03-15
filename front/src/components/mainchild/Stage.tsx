import React from "react";
import { Outlet } from "react-router-dom";
const Stage:React.FC= () => {
    
    return (
        <div>
        <Outlet/>
    </div>
    );
};

export default Stage;