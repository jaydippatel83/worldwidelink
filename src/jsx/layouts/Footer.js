import React from "react";

const Footer = () => {
	var d = new Date();
	return (
		<div className="footer out-footer">
			<div className="copyright">
				<p>Copyright © Designed &amp; Developed by{" "}
					<a href="http://worldwidelink.vercel.app/" target="_blank" rel="noreferrer">
						world wide link
					</a>{" "}
					{d.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
