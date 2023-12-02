import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from "./context/ThemeContext";
import { Web3ContextProvider } from './context/Web3Context';
import { EscrowContextProvider } from './jsx/components/EscrowContext/EscrowContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ToastContainer />
      <ThemeContext>
        <Web3ContextProvider>
          <EscrowContextProvider>
            <App />
            <Analytics />
          </EscrowContextProvider>
        </Web3ContextProvider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
