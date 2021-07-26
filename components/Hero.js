import React from 'react';
import { chakra, Box, useColorModeValue } from '@chakra-ui/react';
import SubscriptionForm from './SubscriptionForm';

const Hero = () => {
	return (
		<Box maxW='container.xl' mx='auto'>
			<Box
				pos='relative'
				pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
				w='full'
				border='solid 1px transparent'
			>
				<Box
					mx='auto'
					maxW={{ base: '7xl' }}
					px={{ base: 4, sm: 6, lg: 8 }}
					mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
				>
					<Box
						d='flex'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						textAlign='center'
						w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
						mx='auto'
					>
						<chakra.h1
							fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
							letterSpacing='tight'
							lineHeight='short'
							fontWeight='extrabold'
							color={useColorModeValue('gray.900', 'white')}
						>
							<chakra.span
								display={{ base: 'block', xl: 'inline' }}
							>
								Open-source micro applications for makers{' '}
							</chakra.span>
						</chakra.h1>
						<chakra.p
							mt={{ base: 3, sm: 5, md: 5 }}
							mx={{ sm: 'auto', lg: 0 }}
							mb={8}
							fontSize={{ base: 'lg', md: 'xl' }}
							color='gray.500'
							lineHeight='base'
						>
							All the small features that improve user experience
							or make your life as a maker easier. Host them
							anywhere you want. Ready to go in under an hour.
						</chakra.p>
						<SubscriptionForm w='lg' />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
