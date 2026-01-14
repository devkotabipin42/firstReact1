import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CartsUnder from "./CartsUnder";
import ProductContext, { ProductsData } from "../Context/ProductContext";

const Carts = () => {
	
	
  return (
    <div className="h-[100%] w-[100%] absolute top-0 bg-black flex">
      

      <div className="h-full p-10  w-[70%] bg-black">
		<Link className=" " to="/shein">
        {"< Back To Store"}
      </Link>
	   
	   <h1 className="text-3xl mt-7">Shopping cart</h1>
		<div className="flex justify-between mt-10">
		<p className="">Item</p>
	   <div className="flex gap-23">
		<p>size</p>
		<p>Quantity</p>
		<p>Price</p>
		<p>Delete</p>
	   </div>
		</div>
	  <CartsUnder/>
	  </div>
      <div className="h-full w-[30%] bg-blue-900">
		
	  </div>
    </div>
  );
};

export default Carts;
