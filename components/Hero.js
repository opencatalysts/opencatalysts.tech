import React from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Button,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

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
								Open-source micro-saas applications for makers{' '}
							</chakra.span>
						</chakra.h1>
						<chakra.p
							mt={{ base: 3, sm: 5, md: 5 }}
							mx={{ sm: 'auto', lg: 0 }}
							mb={6}
							fontSize={{ base: 'lg', md: 'xl' }}
							color='gray.500'
							lineHeight='base'
						>
							All the small features that improve user experience
							or make your life as a maker easier. Host them
							anywhere you want. Ready to go in under an hour.
						</chakra.p>
						<Stack
							direction={{
								base: 'column',
								sm: 'column',
								md: 'row',
							}}
							mb={{ base: 4, md: 8 }}
							spacing={{ base: 8, md: 4 }}
							justifyContent='center'
						>
							<NextLink href='/docs' passHref={true}>
								<Button
									as='a'
									w={{ base: 'full', sm: 'auto' }}
									variant='solid'
									colorScheme='brand'
									size='lg'
									mb={{ base: 2, sm: 0 }}
									p={8}
									fontSize='xl'
									cursor='pointer'
								>
									See Products
								</Button>
							</NextLink>
							<Button
								as='a'
								bg={useColorModeValue('gray.500', 'gray.600')}
								w={{ base: 'full', sm: 'auto' }}
								mb={{ base: 2, sm: 0 }}
								p={8}
								size='lg'
								fontSize='xl'
								leftIcon={<AiFillGithub />}
								target='__blank'
								cursor='pointer'
								href='https://github.com/opencatalysts'
								aria-label='Checkout our open-source projects'
							>
								GitHub
							</Button>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
