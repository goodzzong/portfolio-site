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
			main {
				width: 100%;
				max-width: 1200px;
				margin: 0 auto;
				min-height: 70vh;
			}
			.main-title {
				display: block;
				font-size: 1.5em;
				margin-block-start: 0.83em;
				margin-block-end: 0.83em;
				margin-inline-start: 0px;
				margin-inline-end: 0px;
				margin-bottom: 20px;
				font-weight: bold;
			}
			.portfolio-list {
				display: grid;
				grid-template-columns: repeat(3, minmax(370px, 1fr));
				grid-gap: 30px;
			}


			@mixin material-shadow($z-depth: 1, $strength: 1, $color: black) {
				@if $z-depth == 1 {
					box-shadow: 0 1px 3px rgba($color, $strength * 0.14),
					0 1px 2px rgba($color, $strength * 0.24);
				}
				@if $z-depth == 2 {
					box-shadow: 0 3px 6px rgba($color, $strength * 0.16),
					0 3px 6px rgba($color, $strength * 0.23);
				}
				@if $z-depth == 3 {
					box-shadow: 0 10px 20px rgba($color, $strength * 0.19),
					0 6px 6px rgba($color, $strength * 0.23);
				}
				@if $z-depth == 4 {
					box-shadow: 0 15px 30px rgba($color, $strength * 0.25),
					0 10px 10px rgba($color, $strength * 0.22);
				}
				@if $z-depth == 5 {
					box-shadow: 0 20px 40px rgba($color, $strength * 0.3),
					0 15px 12px rgba($color, $strength * 0.22);
				}
				@if ($z-depth < 1) or ($z-depth > 5) {
					@warn "$z-depth must be between 1 and 5";
				}
			}

			.portfolio {
				@include material-shadow(4, 0.5);
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				img {
					max-width: 100%;
					margin-bottom: 10px;
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
				}
				.portfolio__info {
					padding: 10px;
					.portfolio__title {
						display: block;
						font-size: 1.25rem;
						line-height: 2rem;
						max-height: 4rem;
						font-weight: 600;
						overflow: hidden;
						margin-bottom: 10px;
					}
					.portfolio__views {
						font-size: .875rem;
						margin-top: .5rem;
						color: #8aa6c1;
					}
				}
			}		
			`}</style>
		</div>
	);
};

export default Home;