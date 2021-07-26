import React from 'react';
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	Icon,
	Stack,
} from '@chakra-ui/react';
import { BiPaint } from 'react-icons/bi';
import {
	IoCodeSlashOutline,
	IoMoonOutline,
	IoSettingsOutline,
	IoRocketOutline,
} from 'react-icons/io5';
import { HiOutlineLightningBolt } from 'react-icons/hi';

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
				<Icon as={props.icon} w={6} h={6} color='brand.400' mb={4} />
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
							Built on open source, opinionated, designed for easy
							deployments, quick access and scalable usage.
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
								icon={IoCodeSlashOutline}
							>
								All code is available on Github. You can
								download and host it anywhere you want.
							</Feature>

							<Feature
								title='Easy Configuration'
								icon={IoSettingsOutline}
							>
								Plenty of configuration options means you spend
								less time fiddling to make it work.
							</Feature>

							<Feature title='Themeable' icon={BiPaint}>
								Just update your logo and brand colors in
								theme.js to fit the UI to your brand.
							</Feature>

							<Feature
								title='Powered by Supabase'
								icon={HiOutlineLightningBolt}
							>
								Authentication, database and storage are powered
								by Supabase.
							</Feature>

							<Feature
								title='Light and Dark Mode'
								icon={IoMoonOutline}
							>
								Easily switch between light and dark themes or
								pick one and roll with it. Your choice.
							</Feature>

							<Feature
								title='Easy to start and scale'
								icon={IoRocketOutline}
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
