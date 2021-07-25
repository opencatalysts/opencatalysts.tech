import React from 'react';
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	Icon,
	Stack,
} from '@chakra-ui/react';

const Features = () => {
	const Feature = (props) => {
		return (
			<Box
				d='flex'
				flexDirection='column'
				alignItems='start'
				justifyContent='center'
				p={8}
				bg={useColorModeValue('white', 'gray.800')}
				shadow='lg'
				rounded='lg'
			>
				<Icon
					boxSize={6}
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					aria-hidden='true'
					mb={4}
				>
					{props.icon}
				</Icon>
				<chakra.dt
					fontSize='xl'
					fontWeight='medium'
					lineHeight='6'
					color={useColorModeValue('gray.900')}
				>
					{props.title}
				</chakra.dt>
				<chakra.dd
					mt={2}
					color={useColorModeValue('gray.500', 'gray.400')}
				>
					{props.children}
				</chakra.dd>
			</Box>
		);
	};

	return (
		<Flex
			borderTopWidth={1}
			borderTopStyle='solid'
			borderTopColor={useColorModeValue('gray.700', 'gray.700')}
			borderBottomWidth={1}
			borderBottomStyle='solid'
			borderBottomColor={useColorModeValue('gray.700', 'gray.700')}
			py={20}
			w='full'
			justifyContent='center'
			alignItems='center'
		>
			<Box py={12}>
				<Box maxW='7xl' mx='auto'>
					<Box textAlign={{ lg: 'center' }}>
						<chakra.h2
							mt={2}
							fontSize={{ base: '3xl', sm: '4xl' }}
							lineHeight='8'
							fontWeight='extrabold'
							letterSpacing='tight'
							color={useColorModeValue('gray.900')}
						>
							Features common to all our products
						</chakra.h2>
						<chakra.p
							mt={4}
							maxW='2xl'
							fontSize='xl'
							mx={{ lg: 'auto' }}
							color={useColorModeValue('gray.500', 'gray.400')}
						>
							Opinionated and designed for quick deployments,
							quick access and scalable usage.
						</chakra.p>
					</Box>

					<Box mt={10}>
						<Stack
							spacing={{ base: 10, md: 0 }}
							display={{ md: 'grid' }}
							gridTemplateColumns={{ md: 'repeat(3,1fr)' }}
							gridColumnGap={{ md: 8 }}
							gridRowGap={{ md: 10 }}
						>
							<Feature
								title='Open Source'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
									/>
								}
							>
								All code is available on Github. You can
								download and host it anywhere you want.
							</Feature>

							<Feature
								title='Easy Configuration'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
									/>
								}
							>
								Plenty of configuration options means you spend
								less time fiddling to make it work.
							</Feature>

							<Feature
								title='Themeable'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M13 10V3L4 14h7v7l9-11h-7z'
									/>
								}
							>
								Just update your logo and brand colors in
								theme.js to fit the UI to your brand.
							</Feature>

							<Feature
								title='Powered by Supabase'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
									/>
								}
							>
								Authentication, database and storage are powered
								by Supabase.
							</Feature>

							<Feature
								title='Light and Dark Mode'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
									/>
								}
							>
								Easily switch between light and dark themes or
								pick one and roll with it. Your choice.
							</Feature>

							<Feature
								title='Easy to start and scale'
								icon={
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
									/>
								}
							>
								Get going in under an hour. Scale easily as you
								grow your product.
							</Feature>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default Features;
