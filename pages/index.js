import { chakra } from '@chakra-ui/react';
import Container from '../components/Container';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';

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
			flex='1'
		>
			<Hero />
			<Products />
			<Features />
			<CTA />
		</chakra.div>
		<Footer />
	</Container>
);

export default Index;
