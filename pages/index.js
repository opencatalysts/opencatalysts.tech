import { chakra } from '@chakra-ui/react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => (
	<Container height='auto' minH='100vh'>
		<Header />
		<chakra.div
			w='full'
			h='auto'
			d='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-start'
			flex='1 0 auto'
		>
			Test
		</chakra.div>
		<Footer />
	</Container>
);

export default Index;
