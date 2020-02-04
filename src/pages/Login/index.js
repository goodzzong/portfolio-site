import React from 'react';

const Login = () => {
	return (
		<>
			<main>
				<div className="form-container">
					<form>
						<input type="email" name="email" placeholder="Email" required />
						<input type="password" name="password" placeholder="Password" required />
						<input type="submit" value="Log In" />
					</form>
					<div className="social-login">
						<button className="social-login--github" >
							<a href="/auth/github"><span><i className="fab fa-github"></i></span> Continue with Github</a>
						</button>
						<button className="social-login--facebook"><span><i className="fab fa-facebook"></i></span> Continue with Facebook</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;