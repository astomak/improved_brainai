import React, { useState } from "react";
import MenuButton from "../MenuBotton/MenuButton";
import Menu from "../Menu/Menu";

export default function MenuBar({ userName, isSignIn, handleSignOut }) {
  const [showMenu, setShowMenu] = useState(false);
  function onClick() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <MenuButton onClick={onClick} />
      {showMenu && (
        <Menu
          userName={userName}
          isSignIn={isSignIn}
          handleSignOut={handleSignOut}
        />
      )}
    </>
  );
}
