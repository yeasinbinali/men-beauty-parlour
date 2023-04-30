import React from "react";
import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

// Haircuts & Styling.
// Face Treatments.
// Scalp Treatments.
// Nail Treatments.
// Razor Shaves.
// Men's Waxing.
// Color Services.
// Groom/Bachelor Party Packages.

const Main = () => {
  return (
    <div className="text-black bg-secondary">
      <div className='container w-full mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
