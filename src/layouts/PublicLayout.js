import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

class PublicLayout extends Component {
	render() {
		const { component: Component, ...rest } = this.props;

		return (

			<Route
				{...rest}
				render={
					matchProps => (
						<>
							<Header />
							<Component {...matchProps} />
							<Footer />
							<style jsx global>{`
							* {
								margin: 0;
								padding: 0;
								border: 0;
								font-size: 100%;
								font: inherit;
								vertical-align: baseline;
							}
							article,
							aside,
							details,
							figcaption,
							figure,
							footer,
							header,
							hgroup,
							menu,
							nav,
							section {
								display: block;
							}
							html,
							body {
								height: 100%;
							}
							body {
								line-height: 1;
								background-color: #f5f5f5;
								color: black;
								font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
									Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
								font-size: 14px;
							}
							ol,
							ul {
								list-style: none;
							}
							blockquote,
							q {
								quotes: none;
							}
							blockquote:before,
							blockquote:after,
							q:before,
							q:after {
								content: "";
								content: none;
							}
							table {
								border-collapse: collapse;
								border-spacing: 0;
							}
							a {
								all: unset;
								cursor: pointer;
							}
							*,
							input {
								box-sizing: border-box;
							}
							input {
								border: none;
								box-sizing: border-box;
							}
							input:focus {
								outline: none;
							}
							input:active {
								outline: none;
							}

							button,
							input:not([type="file"]),
							textarea,
							.fileUpload {
								padding: 7px 10px;
								width: 100%;
								border: none;
								border-radius: 5px;
								font-size: 14px;
								color: black;
								font-weight: 600;
								background-color: white;
								max-width: 320px;
								resize: none;
								&::placeholder {
									font-weight: 300;
									color: rgba(0, 0, 0, 0.7);
								}
							}

							button {
								border: none;
								background-color: #3498db;
								color: white;
							}

							button.delete {
								background-color: #ff6b6b;;
							}

							button,
							input[type="submit"] {
								cursor: pointer;
							}
							main {
								width: 100%;
								max-width: 1200px;
								margin: 0 auto;
								min-height: 70vh;
							}
							.form-container {
								width: 100%;
								display: flex;
								flex-direction: column;
								align-items: center;
								form {
									width: 100%;
									max-width: 320px;
									margin-bottom: 50px;
									input:not([type="file"]),
									.fileUpload {
										display: block;
										width: 100%;
										padding-top: 10px;
										padding-bottom: 10px;
										box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
										&:not(:last-child) {
											margin-bottom: 25px;
										}
									}
									textarea {
										box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
										margin-bottom: 25px;
									}
									input[type="submit"] {
										background-color: #3498db;
										color: white;
									}
								}
								a {
									max-width: 320px;
									width: 100%;
								}
								.fileUpload {
									label {
										font-weight: 300;
										margin-right: 10px;
									}
								}
							}
							.social-login {
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 100%;
							button {
								width: 100%;
								max-width: 320px;
								display: flex;
								justify-content: center;
								align-items: center;
								&:not(:last-child) {
									margin-bottom: 15px;
								}
								span {
									margin-right: 10px;
									font-size: 20px;
								}
							}
							.social-login--github {
								background-color: #444444;
								color: white;
							}
							.social-login--facebook {
								background-color: #3a5998;
								color: white;
							}
						}														
							`}</style>
						</>
					)
				}
			/>

		);
	}
}

export default PublicLayout;