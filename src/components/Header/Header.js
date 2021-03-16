import React from "react";
import Title from "../Title/Title";

function Header({ handleSignOut, isSignIn }) {
  return (
    <div className="w-full relative">
      <Title />
      {isSignIn && <section className="absolute right-0 top-0">
        <button
          className="bg-indigo-600 hover:bg-indigo-500 shadow-large inpress focus:outline-none font-kaushan rounded-lg px-2 text-lg text-white tracking-widest mr-1 hidden sm:inline"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </section>}
    </div>
  );
}

export default Header;
