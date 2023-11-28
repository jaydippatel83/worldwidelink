import React from 'react';
import shape1 from './../assets/images/home-banner/shape1.png';

function Footer() {
    return (
        <>
            <footer className="site-footer style-1" id="footer">
                <img className="bg-shape1" src={shape1} alt="" />
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2023 <a href="https://worldwidelink.vercel.app" target="_blank">WWL</a>. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;