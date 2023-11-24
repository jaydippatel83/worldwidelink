import React, { createContext, useEffect, useState } from "react";
const ethers = require("ethers");

export const Web3Context = createContext();

const Web3ContextProvider = (props) => {
  const connect = async () => {
    window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  };

  return (
    <Web3Context.Provider
      value={{
        connect,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
export default Web3ContextProvider;
