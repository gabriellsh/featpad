import { Button, Box, Icon } from '@rocket.chat/fuselage';
import { useState } from 'preact/hooks';

const handleClick = () => {
	fetch(`http://localhost:3001/api/auth`, { headers:{
        "accepts":"application/json"
    }}).then(response => response.json())
	.then(data => window.location.replace(data.url));
}

const Oauth = () => (
	<Box w='full' display='flex' alignItems='center' justifyContent='center' h='x60' bg='neutral-900'>
		<Button small primary onClick={handleClick}>
			Try Me!
		</Button>
	</Box>
);

export default Oauth;
