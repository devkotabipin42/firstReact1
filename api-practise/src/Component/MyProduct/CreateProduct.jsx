import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [userName, setuserName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const submitHandller = (e) => {
    e.preventDefault();
    const newProduct = {userName,description,image,price,title}
    const saved = localStorage.getItem('myproduct')
    const old = saved?JSON.parse(saved):[]
    const updated = [...old,newProduct]
    localStorage.setItem('myproduct',JSON.stringify(updated))
    navigate('/product/myproduct')
    // oldUser.push({userName,description,image,price,title})
    // setallUser(oldUser)
    // console.log(oldUser)
    // setDescription('')
    // setuserName('')
    // setImage('')
    // setPrice('')
    // setTitle('')
  };

  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen bg-gray-900 ">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="h-fit absolute w-fit bg-red-900 px-5 py-1 cursor-pointer rounded-3xl text-2xl active:scale-95"
      >
        Back
      </button>
      <div className="h-screen w-screen gap-4 ">
        <form
          on
          onSubmit={submitHandller}
          className="h-screen w-screen flex flex-col items-center pt-7 gap-4"
        >
          <input
            value={userName}
            type="text"
            onChange={(e)=>{
              setuserName(e.target.value)
            }}
            placeholder="Category"
            className="border-2 border-gray-600 text-white p-3 rounded-3xl w-[300px] text-center"
          />
          <input
            value={description}
            type="text"
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            placeholder="Description"
            className="border-2 border-gray-600 text-white p-3 rounded-3xl w-[300px] text-center"
          />
          <input
            value={image}
            type="text"
            onChange={(e)=>{
              setImage(e.target.value)
            }}
            placeholder="Image URL"
            className="border-2 border-gray-600 text-white p-3 rounded-3xl w-[300px] text-center"
          />
          <input
            value={price}
            type="text"
            onChange={(e)=>{
              setPrice(e.target.value)
            }}
            placeholder="Price"
            className="border-2 border-gray-600 text-white p-3 rounded-3xl w-[300px] text-center"
          />
          <input
            value={title}
            type="text"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            placeholder="Title"
            className="border-2 border-gray-600 text-white p-3 rounded-3xl w-[300px] text-center"
          />
          <button className="h-fit w-fit bg-red-900 px-5 py-2 rounded-3xl text-3xl active:scale-95 cursor-pointer">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
