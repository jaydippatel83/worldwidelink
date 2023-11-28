import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Logo from '../images/logo/p_logo.png';
import profile from './../assets/images/avatar/user.png';
import LogoWhite from '../images/logo/white_logo.png';
import { Web3Context } from '../context/Web3Context';
import { Dropdown } from "react-bootstrap";

function Header() {
    const { connectWallet,
        shortAddress,
        disconnectWallet,
        address } = useContext(Web3Context);
    const navigate = useNavigate();
    const [headerFix, setheaderFix] = React.useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });
    }, []);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigateToDash = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <header className="site-header mo-left header header-transparent style-1">
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix">
                            <div className="logo-header">
                                <Link to={"/"} className="logo-dark"><img src={Logo} alt="" /></Link>
                                <Link to={"/"} className="logo-light"><img src={LogoWhite} alt="" /></Link>
                            </div>

                            <div className="extra-nav d-flex">
                                <div className="extra-cell">
                                    {
                                        !address && <button className="btn btn-outline-primary text-white" onClick={connectWallet} >Connect</button>
                                    }
                                    {
                                        address && <button className="btn btn-outline-primary text-white" onClick={navigateToDash} >Launch App</button>
                                    }
                                    {
                                        address && <ul>
                                            <Dropdown as="li" className="nav-item dropdown header-profile" >
                                                <Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer" style={{ borderRadius: '50%', padding: '2px' }}>
                                                    <img src={profile} width={35} height={35} alt="User" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="right" className="dropdown-menu dropdown-menu-end">
                                                    <Link to="/app-profile" className="dropdown-item ai-icon">
                                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary me-1" width={18} height={18} viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                        >
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                            <circle cx={12} cy={7} r={4} />
                                                        </svg>
                                                        <span className="ms-2">{shortAddress(address)} </span>
                                                    </Link>

                                                    <button className="dropdown-item ai-icon ms-1" onClick={disconnectWallet}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                        <span className="ms-2">Logout</span>
                                                    </button>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ul>
                                    }
                                </div>
                            </div>

                            <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? "show" : ""}`} id="navbarNavDropdown" >
                                <div className="logo-header mostion">
                                    <NavLink to={"#"} className="logo-dark"><img src={Logo} alt="" /></NavLink>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header;