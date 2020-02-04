import React, { useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

// {
// 	name: "goodzzong",
// 	profileImageUrl:
// 		"https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png"
// }

const App = () => {
	const [user, setUser] = useState();

	const logOut = () => setUser({ user: undefined });

	return (
		<BrowserRouter>
			<Switch>
				<PublicLayout path="/login" component={Login} />
				<PublicLayout path="/signup" component={SignUp} />
				<DefaultLayout
					path="/"
					component={Home}
					logOut={logOut}
					user={user}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;