import React from 'react';

const SignUp = () => {
	return (
		<>
			<main>
				<div className="form-container">
					<form>
						<input type="text" name="name" placeholder="Full Name" />
						<input type="email" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<input type="password" name="password_check" placeholder="Verify Password" />
						<input type="submit" value="Join Now" />
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

export default SignUp;