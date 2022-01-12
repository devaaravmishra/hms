import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className={"footer"} id={"footer"}>
				<span className={"footer-left"}>
					&copy; 2021 HOSPITAL All Rights Reserved
				</span>
				<ul className={"footer-right"}>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://twitter.com/who?lang=en"
							target="_blank"
							aria-label="Twitter">
							<i className={"fab fa-twitter foot-icon"}></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://www.facebook.com/WHO/"
							target="_blank"
							aria-label="Facebook">
							<i className={"fab fa-facebook-f foot-icon"}></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://www.instagram.com/who/?hl=en"
							target="_blank"
							aria-label="Instagram">
							<i className={"fab fa-instagram foot-icon"}></i>
						</a>
					</li>
				</ul>
			</div>
			<div className={"footer-bottom"}>
				<span className={"footer-bottom-text"}>
					Designed by Jitesh Prajapat &amp; Aarav Mishra
				</span>
			</div>
		</footer>
	);
};

export default Footer;
