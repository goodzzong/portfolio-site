import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer__icon">
					<i className="fas fa-address-card"></i>
				</div>
				<span className="footer__text">Job Helper 2020 &copy; </span>
			</footer>

			<style jsx>{`
			.footer {
				margin: 50px 0;
				padding-top: 50px;
				border-top: 3px solid rgba(0, 0, 0, 0.1);
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				
				.footer__icon {
					color: rgba(0, 0, 0, 0.2);
					font-size: 40px;
					margin-bottom: 20px;
				}
				.footer__text {
					color: rgba(0, 0, 0, 0.2);
					font-weight: 800;
					text-transform: uppercase;
				}
			}
		`}</style>
		</>
	);
};

export default Footer;