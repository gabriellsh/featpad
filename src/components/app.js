import { Router } from 'preact-router';
import { Box } from '@rocket.chat/fuselage';
import '@rocket.chat/icons/dist/rocketchat.css';

import Header from './Header';

// Code-splitting is automated for routes
import Home from '../routes/Home';
import Profile from '../routes/profile';

export default function App() {
	return (
		<Box is='div' id="app" color='alternative' bg='default' display='flex' flexDirection='column'>
			<Header />
			<Router>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</Box>
	);
}
