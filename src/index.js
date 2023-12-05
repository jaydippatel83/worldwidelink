import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from "./context/ThemeContext";
import { Web3ContextProvider } from './context/Web3Context';
import { EscrowContextProvider } from './jsx/components/EscrowContext/EscrowContext';
import { LiquidStakeContextProvider } from './jsx/components/LiquidStake/LiquidstateContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { GraphApolloLink } from '@graphprotocol/client-apollo';


const client = new ApolloClient({
  link: new GraphApolloLink(),
  cache: new InMemoryCache(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ToastContainer />
      <ThemeContext>
        <ApolloProvider client={client}>
          <Web3ContextProvider>
            <EscrowContextProvider>
              <LiquidStakeContextProvider>
                <App />
                <Analytics />
              </LiquidStakeContextProvider>
            </EscrowContextProvider>
          </Web3ContextProvider>
        </ApolloProvider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
