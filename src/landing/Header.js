import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from './../assets/images/logo.png';
import LogoWhite from './../assets/images/logo-white.png';

function Header() {

    const [headerFix, setheaderFix] = React.useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });
    }, []);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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
                                    <button className="btn btn-outline-primary text-white" >Connect Wallet</button>
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