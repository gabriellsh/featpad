import { h } from 'preact';
import { Link } from 'preact-router/match';

import { Button, Box, Icon } from '@rocket.chat/fuselage';

const Header = () => (
	<Box w='full' display='flex' alignItems='center' justifyContent='center' h='x60' bg='neutral-900'>
        <Box display='flex' justifyContent='space-between' maxWidth='x800' w='full' alignItems='center'>
            <Box is={(props) => <Link href='/' {...props} />} color='alternative' textDecorationLine='none' fontScale='h1'>FeatPad</Box>
            <Box is='nav' >
                <Link href='/profile'>
                    <Button small primary>
                        <Box display='flex' alignItems='center' fontScale='s2' title='login with github'>
                            <Icon name='github' size='x24' mie='x8' />Login
                        </Box>
                    </Button>
                </Link>
            </Box>
        </Box>
	</Box>
);

export default Header;
