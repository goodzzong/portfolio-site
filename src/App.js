import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
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
			body {
				line-height: 1;
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
			`}</style>
		</>
	);
};

export default App;