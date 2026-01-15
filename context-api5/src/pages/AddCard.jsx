import React, { useContext, useState } from "react";
import { ProductsData } from "../Context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const AddCard = () => {
  const [first, setFirst] = useState(1);

  const data = useContext(ProductsData);
  const { productId } = useParams();
  let selectedProduct = "";

  if (data.length > 0) {
    selectedProduct = data.find((elem) => elem.id == productId);
  }
  console.log(selectedProduct);

  const navigate = useNavigate();

  return (
    <div className="lg:h-[450px] lg:w-[450px] h-[190px] w-[150px]  rounded-3xl border-2 flex flex-col  ml-10 pl-6  bg-gray-800  gap-5">
      <div>
        <h1 className="text-[2vw] font-extrabold h-[30px] mt-[20px]">
          {selectedProduct.category}
        </h1>
        <p className=" text-[1vw] sm:h-fit lg:h-[200px] mt-2 w-[80%] overflow-hidden items-center">
          {selectedProduct.description}
        </p>
        <p className="text-[2vw]  w-[80%]">{`Price : ${
          selectedProduct.price * 100
        }`}</p>
        <div className="flex items-center text-[2vw]">
          <p className="text-[2vw]">Amount :</p>
          <div className="h-fit flex justify-evenly w-[40%]">
            <button
              onClick={() => {
                setFirst(first - 1);
              }}
              className="text-3xl active:scale-95"
            >
              {"<"}
            </button>
            <h1>{first}</h1>
            <button
              onClick={() => {
                setFirst(first + 1);
              }}
              className="text-3xl  active:scale-95"
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="flex justify-evenly mt-6">
          <button
            onClick={() => {
              navigate(`/shein/${productId}/cart`);
            }}
            className="h-fit w-fit bg-blue-700 p-2 rounded-3xl px-4  active:scale-95 active:bg-blue-950"
          >
            Add Cart
          </button>
          <button className="h-fit w-fit bg-blue-700 p-2 rounded-3xl px-4 active:scale-95 active:bg-blue-950">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
