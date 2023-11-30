import React, { useContext } from 'react';
import { Web3Context } from '../../../context/Web3Context';

function LogoutPage() {
  const { disconnectWallet } = useContext(Web3Context);
  return (
    <>
      <button className="dropdown-item ai-icon ms-1" onClick={disconnectWallet} >
        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        <span className="ms-2">Logout</span>
      </button>
    </>
  )
}

export default LogoutPage; 