import React from 'react';
import shape1 from './../assets/images/home-banner/shape1.png';

function Footer() {
    return (
        <>
            <footer className="site-footer style-1" id="footer">
                <img className="bg-shape1" src={shape1} alt="" />
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2023 <a rel="noreferrer" href="https://worldwidelink.xyz" target="_blank" className='text-decoration-none'  >WorldWideLink</a>. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;