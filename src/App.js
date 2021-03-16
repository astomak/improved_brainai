import React, { useState } from "react";
import Header from "./components/Header/Header";
import Particles from "react-tsparticles";
import MenuBar from "./components/MenuBar/MenuBar";
import DetectionBox from "./components/DetectionBox/DetectionBox";
import SignIn from "./components/SignIn/SignIn";

const options = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#2EB67D", "#B9C0DA", "#998DA0"],
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

function App() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSignIn = (value) => {
    setUserName(value);
    setSignIn(!signIn);
  };

  return (
    <div>
      <Particles options={options} />
      <div className="text-center w-full text-xl md:text-2xl fixed top-0">
        <Header handleSignOut={handleSignIn} isSignIn={signIn} />
      </div>
      {!signIn ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <SignIn handleSignIn={handleSignIn} />
        </div>
      ) : (
        <div className="w-full h-full">
          <MenuBar userName={userName} isSignIn={signIn} handleSignOut={handleSignIn}/>
          <div className="w-full min-h-screen flex justify-center mt-10 md:items-center">
            <DetectionBox />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
