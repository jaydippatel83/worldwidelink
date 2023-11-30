import React, { createContext, useEffect, useState, useRef } from "react";
const ethers = require("ethers");

export const FirebaseContext = createContext();

const FirebaseContextProvider = (props) => {


    const firebaseConfig = {
        apiKey: "AIzaSyD5OJb4l2uX47Jx6-QVOTqnXIB_uekS_Pw",
        authDomain: "wwl-world-wide-link.firebaseapp.com",
        projectId: "wwl-world-wide-link",
        storageBucket: "wwl-world-wide-link.appspot.com",
        messagingSenderId: "91868745262",
        appId: "1:91868745262:web:aad0deb2b1bc6471e019bf"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const firestore = getFirestore();
    const collectionRef = collection(firestore, "");



    return (
        <FirebaseContext.Provider
            value={{

            }}

        >
            {props.children}

        </FirebaseContext.Provider>
    )
}
export default FirebaseContextProvider;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);