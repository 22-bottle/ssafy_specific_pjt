import React from "react";
import { Outlet } from "react-router-dom";

const ChildWallet: React.FC = () => {
  return (
    <div>
      {/* this is ChildWallet */}
      <Outlet />
    </div>
  );
};

export default ChildWallet;