import React from "react";
import axios from "axios";
import { useState } from "react";
import  User  from "./component/User";
import { useEffect } from "react";
const App = () => {
  const [allUsers, setallUsers] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setallUsers(response.data);
    console.log("clicked");
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[])
  return (
    <div className="p-10">
      {/* <button
        onClick={() => {
          getData();
        }}
        className="bg-amber-950 px-5 py-5 rounded "
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap">
        {allUsers.map(function(elem,idx){
          console.log(elem)
          return <div key={idx}>
             <User elem={elem} />
          </div>
      })}
      </div>
    </div>
  );
};

export default App;
