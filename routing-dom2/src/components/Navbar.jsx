import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-4xl h-fit w-screen bg-cyan-700 p-4 flex justify-between text-amber-50">
      <h1>Project</h1>
      <div className=" flex gap-8">
        <NavLink style={({isActive})=>
        ({color:isActive?'red':'white'})
        } to="/">Home</NavLink>
        <NavLink style={({isActive})=>
        ({color:isActive?'red':'white'})
        } to="/about">About</NavLink>
        <NavLink style={({isActive})=>
        ({color:isActive?'red':'white'})
        } to="/courses">Courses</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
