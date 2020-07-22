import { h } from 'preact';
import { Box, Avatar, Button, ButtonGroup, Icon, Margins } from '@rocket.chat/fuselage';

const mockProps = {
	user: {
		avatarUrl: 'https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/8/86/GumballSeason2.png/revision/latest/scale-to-width-down/340?cb=20180717145515',
		userName: 'gumball',
	},
	title: 'Image Editing in-app',
	description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
	url: '',
	upVotes: 12,
	downVotes: 0,
}

const FeatureCard = ({
	user,
	title,
	description,
	url,
	upVotes = 0,
	downVotes = 0,
}) => {
	const {
		avatarUrl,
		userName,
	} = user;

	return <Box w='full' p='x12' mb='x12' display='flex' flexDirection='row' bg='neutral-900'>
		<Margins inline='x8'>
			<Box display='flex' flexDirection='column' mis='neg-x8'>
				<Margins block='x8'>
					<Avatar url={avatarUrl} size='x120' style={{objectFit: 'contain'}} />
					<Box>@{userName}</Box>
					<ButtonGroup vertical stretch>
						<Button primary small>
							<Icon name='chevron-up' size='x16' />
							{upVotes}
						</Button>
						<Button primary danger small>
							<Icon name='chevron-down' size='x16' />
							{downVotes}
						</Button>
					</ButtonGroup>
				</Margins>
			</Box>
			<Box display='flex' flexDirection='column' mie='neg-x8'>
				<Box fontScale='h1' withTruncatedText maxHeight='x32'>{title}</Box>
				<Box fontScale='p1' maxHeight='x200'>{description}</Box>
				<Button alignSelf='flex-end' ghost small><Icon name='permalink' size='x20' />See Issue</Button>
			</Box>
		</Margins>
	</Box>;
}

const Home = () => (
	<Box display='flex' flexDirection='column' maxWidth='x800' w='full' alignSelf='center'>
		<FeatureCard {...mockProps} />
	</Box>
);

export default Home;
