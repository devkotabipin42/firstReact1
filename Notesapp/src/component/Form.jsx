import React from "react";
import  { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])
    
    const submitHandler = (e) => {
    e.preventDefault();
    const copyTask =[...task]

    copyTask.push({title,details})
    setTask(copyTask)
    setDetails('')
    setTitle('')
  };

  return (
    <div className="text-black lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-7 flex-col lg:w-1/2 "
        
      >
        {/*pahila input */}
        <input
          type="text"
          placeholder="Enter Task "
          className="h-fit w-full border-2 rounded-3xl mt-7 px-6 py-4 text-3xl"
          value={title}
          onChange={(e)=>{
          setTitle(e.target.value)
            
        }}
        />
        {/* detailed input*/}
        <input
          type="text"
          className="h-fit w-full  border-2 rounded-3xl px-6 py-6 text-3xl"
          placeholder="Write details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}

        />
        <button className="bg-fuchsia-900  w-full outline-none  ml- rounded-3xl p-5 active:scale-95 ">
          Add Note
        </button>
      </form>
      <div className=" p-10 gap-5 lg:w-1/2 lg:border-l-2">
        <h1 className="text-5xl font-bold">Recent Notes</h1>

        <div className=" flex flex-wrap items-start justify-start overflow-auto mt-6 h-full gap-6">
            {task.map(function(elem,idx){
                return <div key={idx} className="relative h-52 w-42 rounded-2xl flex flex-col text-center bg-cover  bg-[url(https://i.pinimg.com/736x/6a/9e/45/6a9e4523b3e2e13e9d14303cb58309a4.jpg)]">
                    <h3 className="leading-tight text-3xl font-bold">{elem.title}</h3>
                    <p className=" leading-tight font-medium text-gray-500">{elem.details}</p>
                </div>

            })}
        </div>
      </div>
    </div>
  );
};

export default Form;
