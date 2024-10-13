import React from "react";
import logo from "../assets/pilogo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container w-full h-dvh relative">
      <div className="w-full h-dvh px-2 relative">
        <header className="header flex flex-row justify-between px-3 py-3">
          <div className="logo flex flex-row gap-x-1 place-items-center px-2">
            <img src={logo} alt="" className="h-8" />
            <span className="font-extrabold">Pi</span>
            <span className="font-light">Network</span>
          </div>

          <div className="icons flex flex-row gap-x-2 place-items-center px-2">
            <FiSearch className="text-white text-xl" />
            <HiOutlineMenuAlt2 className="text-white text-xl" />
          </div>
        </header>

        <div className="flex flex-col text-white px-7 w-full h-[90dvh] justify-center">
          <p className="text-3xl font-medium mb-6">
            The First Digital Currency You Can Mine on Your Phone
          </p>
          <p className="mb-6">
            Start mining Pi cryptocurrency today on our free, energy-light
            mobile app!
          </p>
          <Link
            className="border border-[#f6b133] rounded mb-6 text-[#f6b133] py-3 w-[80%] flex items-center justify-center gap-2"
            to="/home"
          >
            VALIDATE WALLET <PiDownloadSimpleLight className="text-2xl" />
          </Link>

          <Link
            className="border border-[#f6b133] rounded mb-6 text-[#f6b133] py-3 w-[80%] flex items-center justify-center gap-2"
            to="/pi-wallet"
          >
            REQUEST UNLOCK PERMISSION <FaCheck className="text-2xl" />
          </Link>

          <iframe
            width="100%"
            src="https://www.youtube.com/embed/MsOaC61cR3U?controls=0&amp;modestbranding=1&amp;rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
      <div className="absolute bg-white w-full py-2 flex items-center justify-between px-8 bottom-0 rounded-tr-[15px] rounded-tl-[15px]">
        <div className="text-[12px]">
          <p>Pi Network</p>
          <p className="font-[300]">Start mining. Easy as Pi!</p>
        </div>
        <button className="text-[#703d92] bg-[#f6b133] px-2 py-1 text-[12px]">
          Download
        </button>
      </div>
    </div>
  );
};

export default Landing;
