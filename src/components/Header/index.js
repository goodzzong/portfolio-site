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
				background: linear-gradient( to left, #c5f6fa, #15aabf );
				margin-bottom: 50px;
				.header__wrapper {
					padding: 10px 0px;
					width: 100%;
					margin: 0 auto;
					max-width: 1200px;
					display: grid;
					grid-template-columns: 3% 52% 45%;
					align-items: center;
					.header__column {
						i {
							color: white;
							font-size: 30px;
						}
						&:nth-child(2) {
							width: 100%;
							justify-content: left;
						}
						ul {
							display: flex;
							color: white;
							font-weight: 600;
							text-transform: uppercase;
							li:not(:last-child) {
								margin-right: 15px;
							}
						}
					}
				}	
			}
			`}</style>
		</>
	);
};

export default Header;