import React from "react";
import Navbar from './navbar';
import { Outlet } from "react-router-dom";

const ChildWallet: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* this is ChildWallet */}
      <div style={{
        paddingTop: '70px',
        backgroundColor: "#F9FAFB",
        position: "relative",
        minHeight: "calc(100vh - 70px)",
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ChildWallet;