import React, { useContext } from "react";
import { ProductsData } from "../Context/ProductContext";
import { Link, useParams } from "react-router-dom";
import AddCard from "./AddCard";

const Detailproduct = () => {
  const data = useContext(ProductsData);
  const { productId } = useParams();
  let selectedProduct = "";

  if (data.length > 0) {
    selectedProduct = data.find((elem) => elem.id == productId);
  }
  console.log(data);

  return (
    <div className="text-white bg-gray-700 h-screen w-screen absolute top-0 flex justify-center items-center">
      <Link className="absolute top-0 left-0 m-5" to="/shein">
        Back
      </Link>
      <div className="flex  sm:flex-col lg:flex-row">
        <div className="lg:h-[450px] lg:w-[450px] h-[190px] w-[150px] justify-center rounded-3xl border-2 flex  items-center ml-7  bg-gray-800  gap-5">
          <img
            className="lg:h-[450px] h-[450px] w-[100px] lg:w-[450px] p-4 object-contain "
            src={selectedProduct.image}
            alt=""
          />
        </div>
        <div>
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default Detailproduct;
