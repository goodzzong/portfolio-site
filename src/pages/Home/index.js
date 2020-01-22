import React from 'react';

const Home = () => {
	return (
		<div>
			<main>
				<div className="main-title">
					우리들의 작품
				</div>
				<div className="portfolio-list">
					<div className="portfolio">
						<a href="/portfolios/324393">
							<img
								className="portfolio__thumbnail"
								src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MjRfNDkg/MDAxNTI0NTM2NjAwNTQw.IddxA8-dF1o5mTaOwiJqesGQwyEDYYXYiYKmdV-WSMUg.1Rm40HP8qmd2PMAVhm5cyKtlHeifbI2GSnT6FTOncJsg.JPEG.dmm_korea/%ED%92%8D%EA%B2%BD%EC%98%81%EC%96%B4%EB%A1%9C_%EC%97%94%EA%B5%AC%ED%99%94%EC%83%81%EC%98%81%EC%96%B41.jpg?type=w800" />
							<div className="portfolio__info">
								<div className="portfolio__title">
									portfolios awesome
								</div>
								<h6 className="portfolio__views">2019-10-10</h6>
							</div>
						</a>
					</div>

					<div className="portfolio">
						<a href="/portfolios/324393">
							<img
								className="portfolio__thumbnail"
								src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MjRfNDkg/MDAxNTI0NTM2NjAwNTQw.IddxA8-dF1o5mTaOwiJqesGQwyEDYYXYiYKmdV-WSMUg.1Rm40HP8qmd2PMAVhm5cyKtlHeifbI2GSnT6FTOncJsg.JPEG.dmm_korea/%ED%92%8D%EA%B2%BD%EC%98%81%EC%96%B4%EB%A1%9C_%EC%97%94%EA%B5%AC%ED%99%94%EC%83%81%EC%98%81%EC%96%B41.jpg?type=w800" />
							<div className="portfolio__info">
								<div className="portfolio__title">
									portfolios awesome
								</div>
								<h6 className="portfolio__views">2019-10-10</h6>
							</div>
						</a>
					</div>
				</div>
			</main>

			<style jsx>{`
			html,
			body {
				height: 100%; }

			body {
				background-color: #f5f5f5;
				color: black;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
				font-size: 14px; }

			main {
				width: 100%;
				max-width: 1200px;
				margin: 0 auto;
				min-height: 70vh; }

			button,
			input:not([type="file"]),
			textarea,
			.fileUpload {
				padding: 7px 10px;
				width: 100%;
				border: none;
				-webkit-border-radius: 5px;
					-moz-border-radius: 5px;
								border-radius: 5px;
				font-size: 14px;
				color: black;
				font-weight: 600;
				background-color: white;
				max-width: 320px;
				resize: none; }
				button::-webkit-input-placeholder,
				input:not([type="file"])::-webkit-input-placeholder,
				textarea::-webkit-input-placeholder,
				.fileUpload::-webkit-input-placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }
				button:-moz-placeholder,
				input:not([type="file"]):-moz-placeholder,
				textarea:-moz-placeholder,
				.fileUpload:-moz-placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }
				button::-moz-placeholder,
				input:not([type="file"])::-moz-placeholder,
				textarea::-moz-placeholder,
				.fileUpload::-moz-placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }
				button:-ms-input-placeholder,
				input:not([type="file"]):-ms-input-placeholder,
				textarea:-ms-input-placeholder,
				.fileUpload:-ms-input-placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }
				button::-ms-input-placeholder,
				input:not([type="file"])::-ms-input-placeholder,
				textarea::-ms-input-placeholder,
				.fileUpload::-ms-input-placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }
				button::placeholder,
				input:not([type="file"])::placeholder,
				textarea::placeholder,
				.fileUpload::placeholder {
					font-weight: 300;
					color: rgba(0, 0, 0, 0.7); }

			button {
				border: none;
				background-color: #3498db;
				color: white; }

			button.delete {
				background-color: #ff6b6b; }

			button,
			input[type="submit"] {
				cursor: pointer; }

			.portfolio {
				-webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.125), 0 10px 10px rgba(0, 0, 0, 0.11);
					-moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.125), 0 10px 10px rgba(0, 0, 0, 0.11);
								box-shadow: 0 15px 30px rgba(0, 0, 0, 0.125), 0 10px 10px rgba(0, 0, 0, 0.11);
				-webkit-border-top-left-radius: 4px;
					-moz-border-radius-topleft: 4px;
								border-top-left-radius: 4px;
				-webkit-border-top-right-radius: 4px;
					-moz-border-radius-topright: 4px;
								border-top-right-radius: 4px; }
				.portfolio img {
					max-width: 100%;
					margin-bottom: 10px;
					-webkit-border-top-left-radius: 4px;
						-moz-border-radius-topleft: 4px;
									border-top-left-radius: 4px;
					-webkit-border-top-right-radius: 4px;
						-moz-border-radius-topright: 4px;
									border-top-right-radius: 4px; }
				.portfolio .portfolio__info {
					padding: 10px; }
					.portfolio .portfolio__info .portfolio__title {
						display: block;
						font-size: 1.25rem;
						line-height: 2rem;
						max-height: 4rem;
						font-weight: 600;
						overflow: hidden;
						margin-bottom: 10px; }
					.portfolio .portfolio__info .portfolio__views {
						font-size: .875rem;
						margin-top: .5rem;
						color: #8aa6c1; }

				.main-title {
					display: block;
					font-size: 1.5em;
					-webkit-margin-before: 0.83em;
									margin-block-start: 0.83em;
					-webkit-margin-after: 0.83em;
									margin-block-end: 0.83em;
					-webkit-margin-start: 0px;
						-moz-margin-start: 0px;
									margin-inline-start: 0px;
					-webkit-margin-end: 0px;
						-moz-margin-end: 0px;
									margin-inline-end: 0px;
					margin-bottom: 20px;
					font-weight: bold; }

				.portfolio-list {
					display: grid;
					grid-template-columns: repeat(3, minmax(370px, 1fr));
					grid-gap: 30px; }				
			`}</style>
		</div>
	);
};

export default Home;