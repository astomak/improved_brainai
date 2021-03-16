import React, { useState } from "react";

export default function SignIn({ handleSignIn }) {
  const [input, setInput] = useState("");
  
  const handleOnChange = (event) => {
    setInput(event.target.value);
  }


  return (
    <div className="w-full max-w-xs font-mono tracking-widest z-10">
      <form className="bg-transparent shadow-large rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-xl mb-2 uppercase text-center font-extrabold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={input}
            onChange={handleOnChange}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-xl mb-2 uppercase text-center font-extrabold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-widest transform active:scale-90"
            type="button"
            onClick={() => handleSignIn(input)}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
