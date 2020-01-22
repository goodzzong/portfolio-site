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
				display: -webkit-box;
				display: -webkit-flex;
				display: -moz-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				-moz-box-orient: vertical;
				-moz-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-align: center;
				-webkit-align-items: center;
				-moz-box-align: center;
				-ms-flex-align: center;
				align-items: center; 
			}
			.footer .footer__icon {
				color: rgba(0, 0, 0, 0.2);
				font-size: 40px;
				margin-bottom: 20px;
			}
			.footer .footer__text {
				color: rgba(0, 0, 0, 0.2);
				font-weight: 800;
				text-transform: uppercase; 
			}
		`}</style>
		</>
	);
};

export default Footer;