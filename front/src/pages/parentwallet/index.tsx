import React from "react";
import { Outlet } from "react-router-dom";

const ParentWallet: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default ParentWallet;