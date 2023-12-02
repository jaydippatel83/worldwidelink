import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//images
import bannerBg from "../images/background/bg.png";
import Shape1 from "./../assets/images/home-banner/shape1.png";
import Shape3 from "./../assets/images/home-banner/shape3.png";
import pitch from "../images/logo/wwl_pitch.png";
import Header from "./Header";
import Footer from "./Footer";
import { Web3Context } from "../context/Web3Context";

function Landing() {
  const nav = useNavigate();
  const { connectWallet, address } = useContext(Web3Context);
  const [isCssLoaded, setIsCssLoaded] = useState(false);

  const handleNavigate = () => {
    nav("/dashboard");
  };

  let location = useLocation();
  useEffect(() => {
    const loadCss = async () => {
      if (location.pathname === "/") {
        try {
          const module = await import("../assets/css/style.css");
          module.default && module.default.use && module.default.use();
          setIsCssLoaded(true);
        } catch (error) {
          console.error("Error loading CSS:", error);
        }
      } else {
        console.log("app");
      }
    };

    loadCss();
  }, [location]);

  return (
    <div className="page-wrapper">
      {!isCssLoaded ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header />
          <div className="page-content">
            <div className="main-bnr style-1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9 col-lg-9 col-sm-10 col-xxl-9 text-center mx-auto">
                    <h1 className="">Cross-Chain DeFi Hub</h1>
                    <p className="text text-white ">
                      CCIP-powered DeFi platform offering cross-chain
                      integration of lending protocols, escrow, staking, token
                      transfers, and SOS alerts.
                    </p>
                    <button
                      onClick={address ? handleNavigate : connectWallet}
                      className="btn space-lg  btn-shadow btn-primary "
                    >
                      Launch App
                    </button>

                    {/* <ul className="image-before">
                                                <li className="left-img"><img src={baner1} alt="" /></li>
                                                <li className="right-img"><img src={baner2} alt="" /></li>
                                            </ul> */}
                  </div>
                </div>
              </div>
              <img className="bg-shape1" src={Shape1} alt="" />
              <img className="bg-shape2" src={Shape1} alt="" />
              <img className="bg-shape3" src={Shape3} alt="" />
              <img className="bg-shape4" src={Shape3} alt="" />
            </div>
            <div className="clearfix bg-primary-light pb-5 pt-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10 col-md-10 col-sm-10">
                    <img src={pitch} alt="" height="300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
export default Landing;
