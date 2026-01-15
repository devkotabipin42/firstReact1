import React, { useContext } from "react";
import { dataContext } from "../../Context/CardContext";
import { useNavigate, useParams } from "react-router-dom";
import { CartsContext } from "../../Context/CartContext";

const ProductDetail = () => {
  const datas = useContext(dataContext);
  const cart = useContext(CartsContext); // debug-friendly
  const navigate = useNavigate();
  const { Productid } = useParams();
  
  if (!cart) return <p>Cart Provider wrap छैन</p>;
  const { addToCart } = cart;

  const selectedProduct =
    datas?.length > 0
      ? datas.find((elem) => String(elem.id) === String(Productid))
      : null;

  if (!selectedProduct) return <p>Loading...</p>;

  const handleAdd = () => {
    addToCart(selectedProduct, 1);
    navigate("/cart");
  };
  console.log(selectedProduct);
  
  return (
    <div className="text-white bg-[#101828] h-screen w-screen absolute top-0 flex justify-center items-center">
      <button onClick={()=>{
        navigate(-1)
      }} className="absolute top-2 right-0 mx-6 bg-gray-700 px-5 py-2 text-2xl font-bold active:scale-95 rounded-xl">Back</button>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="lg:h-[450px] lg:w-[450px] h-[190px] w-[150px] justify-center rounded-3xl border-2 flex items-center ml-7 bg-gray-800 gap-5">
          <img
            className="lg:h-[450px] h-[450px] w-[100px] lg:w-[450px] p-4 object-contain"
            src={selectedProduct.image}
            alt={selectedProduct.title || "product"}
          />
        </div>

        <div className="ml-6 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{selectedProduct.title}</h1>
          <p className="text-lg">Rs. {(selectedProduct.price)*100}</p>

          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-600 rounded-xl w-fit"
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
