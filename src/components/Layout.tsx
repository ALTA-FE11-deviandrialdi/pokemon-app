import React, { FC } from "react";
import Navbar from "../components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center bg-blue-900 h-screen ">
      <div className="bg-white w-full md:w-1/2 overflow-auto h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
