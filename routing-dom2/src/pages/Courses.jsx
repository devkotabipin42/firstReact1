import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="bg-red-900 flex text-3xl gap-[20px] flex-nowrap  ">
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
      </div>
      <h1 className="text-[200px]  absolute top-1/2 left-1/2 translate-[-50%] text-amber-50">
        
      </h1>
      <Outlet />
    </div>
  );
};

export default Courses;
