import React from "react";
import menuIcon from "./menu_icon.png";

function MenuButton(props) {
  return (
    <div className="fixed top-0 left-0 rounded-full bg-white z-50 active:bg-opacity-0">
      <button
        onClick={props.onClick}
        className="rounded-full border-gray-700 border-2 p-1 hover:bg-gray-100 focus:outline-none transform active:scale-90 shadow-large inpress"
      >
        <img src={menuIcon} className="w-8 h-8 rounded-full" alt="Menu"></img>
      </button>
    </div>
  );
}

export default MenuButton;
