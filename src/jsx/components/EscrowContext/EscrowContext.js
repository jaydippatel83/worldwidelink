import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers, Contract, providers, Signer } from 'ethers';

export const EscrowContext = createContext(undefined);


export const EscrowContextProvider = (props) => {


  
  





    return (
        <EscrowContext.Provider
            value={{


            }}

            {...props}
        >
            {props.children}
        </EscrowContext.Provider>
    )
}
