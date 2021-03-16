import React from "react";
import Title from "../Title/Title";

function Menu({ userName, isSignIn, handleSignOut }) {
  return (
    <div
      className="max-w-xs min-h-screen bg-gray-400 border-black border bg-opacity-75 flex flex-col justify-center fixed top-0 z-40 px-4 rounded-br-full"
      style={{ borderTopRightRadius: "999px" }}
    >
      {isSignIn && (
        <span
          className="absolute top-0 text-lg tracking-wide pt-3"
          style={{ left: "26%" }}
        >
          Hey{" "}
          <span className="tracking-wider font-bold text-gray-200 uppercase">
            {userName} !
          </span>
        </span>
      )}
      <button
        className="bg-indigo-600 hover:bg-indigo-500 shadow-large inpress focus:outline-none font-kaushan rounded-lg px-2 text-lg text-white tracking-widest mr-1 sm:hidden absolute"
        style={{
          top: "50px",
          left: "30%",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      <a href="#">
        <Title />
      </a>
    </div>
  );
}

export default Menu;
