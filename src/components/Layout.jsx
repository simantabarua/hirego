import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
