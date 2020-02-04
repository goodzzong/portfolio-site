import React from 'react';
import Home from './pages/Home';
import Header from '@/components/Header';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Home />
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
			`}</style>
		</>
	);
};

export default App;