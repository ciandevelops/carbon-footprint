import React from "react";
import Environment from "../assets/environment.svg";
const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen p-4">
      <div>
        <img src={Environment} alt="/" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-title-text text-2xl py-4">MyCarbonFootprint.</h1>
        <p className="text-paragraph-text py-4">
          [description here] Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Natus iste in soluta, suscipit tempore, neque aperiam ea
          consequuntur earum fugit enim quo, cumque praesentium reiciendis
          aspernatur modi asperiores voluptatem iusto? Harum, at laboriosam
          atque ducimus natus saepe deleniti neque. Rerum similique natus, nulla
          facere nostrum quaerat voluptate inventore doloremque! Nihil!
        </p>
        <div className="py-4">
          <button className="px-8 py-2 bg-button-color rounded-md text-button-text">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
