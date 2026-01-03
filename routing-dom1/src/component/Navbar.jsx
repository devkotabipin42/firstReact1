import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex  justify-between px-8 bg-pink-800 mb-10 py-6 text-3xl">
        <h2>Navbar</h2>
        <input className="border-2 border-blue-700" type="text "  placeholder="write some thing"/>
        <div className="flex gap-6">
          <Link to='/'>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/courses'}>Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
