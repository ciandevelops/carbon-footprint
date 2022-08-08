import React from "react";
import Environment from "../assets/environment.svg";
const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-[1240px] m-auto sm:flex-row-reverse h-screen p-4">
      <div className="w-[50%] sm:h-[55%] p-8">
        <img src={Environment} alt="/" />
      </div>

      <div className="flex flex-col justify-center items-center sm:w-[50%] sm:h-[55%] sm:items-start">
        <h1 className="text-title-text text-4xl py-4 text-bold">
          MyCarbonFootprint.
        </h1>
        <p className="text-paragraph-text py-4 tracking-wide">
          [description here] Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Natus iste in soluta, suscipit tempore, neque aperiam ea
          consequuntur earum fugit enim quo, cumque praesentium reiciendis
          aspernatur modi asperiores voluptatem iusto? Harum, at laboriosam
          atque ducimus natus saepe deleniti neque. Rerum similique natus, nulla
          facere nostrum quaerat voluptate inventore doloremque! Nihil!
        </p>
        <div className="py-4 sm:py-8">
          <button className="px-8 py-2 bg-button-color rounded-md sm:rounded-none text-button-text">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
