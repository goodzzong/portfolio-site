import React from 'react';
import Logo from '@/components/Logo';
import NaviItem from '@/components/Header/NaviItem'

const Header = ({ user, onLogout }) => {
	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<Logo />
					<div className="header__column">
						<form>
							<input type="text" placeholder="Search by ..." name="search" />
						</form>
					</div>
					<div className="header__column">
						<ul>
							<NaviItem to="/" text="Create" show={user} />
							<NaviItem to="/" text="Profile" show={user} />
							<NaviItem to="/" text="Logout" show={user} />

							<NaviItem to="/signup" text="SIGNUP" show={!user} />
							<NaviItem to="/login" text="LOGIN" show={!user} />
						</ul>
					</div>
				</div>
			</header>

			<style jsx global>{`
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