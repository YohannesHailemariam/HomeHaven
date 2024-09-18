import React from "react";
const ExperienceCard = () => {
  return (
    <>
      <div className="flex flex-col items-start p-4 pl-8
     w-[330px] h-[300px] gap-y-1 border-2 rounded-2xl ml-10 mb-7 shadow-lg">
        <div className="flex flex-row gap-x-3">
          <div className="w-14 h-14 ">
            <img src="profile-1.jpeg" className="w-full h-full rounded-full object-cover"></img>
          </div>
          <div className="flex flex-col">
            <div className="text-left font-semibold">Alicent Hightower</div>
            <div className="text-left font-normal text-sm  text-gray-500 ">Used our service for  5 Years</div>
          </div>

        </div>
        <span className="text-yellow-400 text-xl">
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </span>
        <div className="font-poppins">
          A great place to stay at. Every things is like as described in this website and the amenities work greatly. The host was very welcoming as well.
        </div>
        <div className="pt-10 text-gray-400 font-poppins">
          21st January 2023
        </div>
      </div>
    </>
  );
}
export default ExperienceCard