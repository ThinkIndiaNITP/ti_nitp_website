import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="pb-12">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};
export default Layout;
