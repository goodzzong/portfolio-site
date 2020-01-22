import React from 'react';

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<div className="header__column">
						<a href="/"><i className="fas fa-address-card"></i></a>
					</div>
					<div className="header__column">
						<form>
							<input type="text" placeholder="Search by ..." name="search" />
						</form>
					</div>
					<div className="header__column">
						<ul>
							<li><a href="/portfolios/create">Create</a></li>
							<li><a href="">Profile</a></li>
							<li><a href="">Logout</a></li>
						</ul>
					</div>
				</div>
			</header>

			<style jsx>{`
			.header {
				background: -webkit-gradient(linear, right top, left top, from(#c5f6fa), to(#15aabf));
				background: -webkit-linear-gradient(right, #c5f6fa, #15aabf);
				background: -moz-linear-gradient(right, #c5f6fa, #15aabf);
				background: -o-linear-gradient(right, #c5f6fa, #15aabf);
				background: linear-gradient(to left, #c5f6fa, #15aabf);
				margin-bottom: 50px; 
			}
			.header .header__wrapper {
				padding: 10px 0px;
				width: 100%;
				margin: 0 auto;
				max-width: 1200px;
				display: grid;
				grid-template-columns: 3% 52% 45%;
				-webkit-box-align: center;
				-webkit-align-items: center;
				-moz-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}
			.header .header__wrapper .header__column i {
				color: white;
				font-size: 30px; 
			}
			.header .header__wrapper .header__column:nth-child(2) {
				width: 100%;
				-webkit-box-pack: left;
				-webkit-justify-content: left;
				-moz-box-pack: left;
				-ms-flex-pack: left;
				justify-content: left; 
			}
			.header .header__wrapper .header__column ul {
				display: -webkit-box;
				display: -webkit-flex;
				display: -moz-box;
				display: -ms-flexbox;
				display: flex;
				color: white;
				font-weight: 600;
				text-transform: uppercase; 
			}
			.header .header__wrapper .header__column ul li:not(:last-child) {
				margin-right: 15px; 
			}
			`}</style>
		</>
	);
};

export default Header;