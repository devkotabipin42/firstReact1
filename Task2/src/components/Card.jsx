import React from "react";

const Card = ({ elem }) => {
  return (
    <div className="h-[250px] w-[170px] bg-[#dbdcd4] rounded-[20px] p-1.5 m-[10px] relative">
      <div className="h-[83px] w-[160px] bg-blue-400 rounded-[20px] flex justify-end  ">
        <img
          src={elem.coverImage}
          alt=""
          className="h-[83px] w-[160px] rounded-[20px] object-cover object-center "
        />
        <h3 className="h-fit w-fit bg-[#e1ded4b3] rounded-4xl p-2 text-[9px] absolute m-1 ">
          {elem.followed ? "Following" : "Follow + "}{" "}
        </h3>
      </div>
      <div className="hot h-[60px] w-[60px] bg-black rounded-[50%] top-13 left-4 absolute  ">
        <img
          src={elem.profile}
          alt=""
          className="h-[60px] w-[60px] rounded-[50%] object-cover object-center"
        />
      </div>
      <div>
        <h1 className="mt-[20px] ml-3 font-[600]">{elem.fullName}</h1>
        <p className="ml-3 text-[9px]">{elem.description}</p>
      </div>
      <div className="flex text-[10px] justify-between p-4 font-bold">
        <div>
          <h1>{elem.likesCount}</h1>
          <p>Likes</p>
        </div>
        <div>
          <h1>{elem.postCount}</h1>
          <p>Posts</p>
        </div>
        <div>
          <h1>{elem.viewsCount}</h1>
          <p>View</p>
        </div>
      </div>
      <div className="flex justify-between h-[6.7vh] w-[full] bg-[#edefed] rounded-b-[20px] p-2  m-[-7px] overflow-hidden ">
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-at-fill"></i>
      </div>
    </div>
  );
};

export default Card;
