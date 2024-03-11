import React from "react";
import { Outlet } from "react-router-dom";
const childwallet = () => {
    
    return (
        <div>
        this is childwallet
        <Outlet/>
    </div>
    );
};

export default childwallet;