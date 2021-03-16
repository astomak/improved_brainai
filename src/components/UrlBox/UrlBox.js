import React, { useState } from "react";

function UrlBox({ changeImageUrl }) {
  const [enterUrlBox, setEnterUrlBox] = useState(false);
  const [input, setInput] = useState("");
  
  const handleOnChange = event => {
    setInput(event.target.value);
  }

  const handleOnClick = () => {
    setEnterUrlBox(!enterUrlBox);
    enterUrlBox && changeImageUrl(input);
  }


  return (
    <div
      className="flex flex-col justify-evenly w-full p-4 text-md sm:text-lg md:text-xl"
      style={{ borderTopRightRadius: "999px" }}
    >
      <span className="text-white tracking-widest ml-2 p-2">
        Return probability scores on the likelihood that the image contains
        human faces and coordinate locations of where those faces appear with a
        bounding box. This model is great for anyone building an app that
        monitors or detects human activity.
      </span>
      <div className="flex flex-col items-center mt-4 space-y-2">
        {enterUrlBox && (
          <input
            type="text"
            className="bg-black hover:bg-gray-400 p-1 rounded-lg text-white hover:text-black w-4/5"
            placeholder="Enter Image URL here.."
            onChange={handleOnChange}
            value={input}
          ></input>
        )}
        <button
          className="bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded-lg font-bold tracking-widest shadow-lg transform active:scale-95 focus:outline-none uppercase text-white"
          onClick={handleOnClick}
        >
          {!enterUrlBox ? "Try it out yourself!" : "Enter"}
        </button>
      </div>
    </div>
  );
}

export default UrlBox;
