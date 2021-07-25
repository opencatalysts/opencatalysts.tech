import React from 'react';
import {
	chakra,
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';

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
					<Stack
						w='md'
						direction={{ base: 'column', md: 'row' }}
						as={'form'}
						spacing={'12px'}
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<FormControl>
							<Input
								h={12}
								variant={'solid'}
								borderWidth={1}
								color={'gray.800'}
								_placeholder={{
									color: 'gray.400',
								}}
								borderColor={useColorModeValue(
									'gray.300',
									'gray.700'
								)}
								id={'email'}
								type={'email'}
								required
								placeholder={'Your Email'}
								aria-label={'Your Email'}
								value={''}
								disabled={false}
								onChange={(e) => {
									console.log(e);
								}}
							/>
						</FormControl>
						<FormControl w={{ base: '100%', md: '40%' }}>
							<Button
								colorScheme='brand'
								h={12}
								isLoading={false}
								w='100%'
								type='submit'
							>
								Subscribe
							</Button>
						</FormControl>
					</Stack>
				</Box>
			</Flex>
		</Flex>
	);
};

export default CTA;
