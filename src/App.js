import { Suspense, useContext, useEffect, useState } from 'react';
import Index from "./jsx";
import { Route, Routes, useLocation } from 'react-router-dom';

import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
// import "./css/style.css";
import Landing from './landing/Landing';
import { Web3Context } from './context/Web3Context';
import "./App.css";


function App(props) {
  const { address } = useContext(Web3Context);
  let location = useLocation();

  useEffect(() => {
    const loadCss = async () => {
      if (location.pathname !== '/') {
        try {
          const module = await import('./css/style.css');
          module.default && module.default.use && module.default.use();
        } catch (error) {
          console.error('Error loading CSS:', error);
        }
      } else {
        // console.log("home");
      }
    };

    loadCss();
  }, [location]);

  let routeblog = (

    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
  if (address) {
    return (
      <>
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          <Index />
        </Suspense>
      </>
    );

  } else {
    return (
      <div className="vh-100">
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          {routeblog}
        </Suspense>
      </div>
    );
  }
};



export default App;

