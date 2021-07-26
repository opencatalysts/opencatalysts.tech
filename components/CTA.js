import React from 'react';
import { chakra, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import SubscriptionForm from './SubscriptionForm';

const CTA = () => {
	return (
		<Flex p={50} w='full' alignItems='center' justifyContent='center'>
			<Flex
				justify='center'
				bg={useColorModeValue('white', 'gray.800')}
				w='full'
				maxW='container.xl'
				rounded='lg'
				shadow='lg'
			>
				<Box
					w='full'
					px={4}
					py={20}
					d='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					textAlign={{ base: 'left', md: 'center' }}
				>
					<chakra.span
						fontSize={{ base: '3xl', sm: '4xl' }}
						fontWeight='extrabold'
						letterSpacing='tight'
						lineHeight='shorter'
						color={useColorModeValue('gray.900', 'gray.100')}
						mb={6}
					>
						<chakra.span display='block'>
							Want updates about releases and product launches?
						</chakra.span>
						<chakra.span
							display='block'
							color={useColorModeValue('brand.600', 'gray.500')}
						>
							Sign up for our newsletter.
						</chakra.span>
					</chakra.span>
					<SubscriptionForm />
				</Box>
			</Flex>
		</Flex>
	);
};

export default CTA;
