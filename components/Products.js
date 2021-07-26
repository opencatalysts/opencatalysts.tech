import React from 'react';
import {
	Box,
	Button,
	chakra,
	Flex,
	SimpleGrid,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const Products = () => {
	return (
		<Flex
			p={20}
			w='full'
			maxW='container.xl'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Box textAlign={{ lg: 'center' }}>
				<chakra.p
					color={useColorModeValue('brand.600')}
					fontWeight='semibold'
					textTransform='uppercase'
					letterSpacing='wide'
				>
					We <chakra.span color='red.500'>♥</chakra.span> Open Source
				</chakra.p>
				<chakra.h2
					mt={2}
					fontSize={{ base: '3xl', sm: '4xl' }}
					lineHeight='8'
					fontWeight='extrabold'
					letterSpacing='tight'
					color={useColorModeValue('gray.900')}
				>
					Our Products
				</chakra.h2>
			</Box>
			<Box px={8} py={20} mx='auto'>
				<SimpleGrid
					alignItems='start'
					columns={{ base: 1, md: 2 }}
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box
						h='full'
						d='flex'
						flexDirection='column'
						alignItems='start'
						justifyContent='center'
					>
						<chakra.h3
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight='bold'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('gray.900', 'gray.400')}
							lineHeight={{ md: 'shorter' }}
							textShadow='2px 0 currentcolor'
						>
							Herald
						</chakra.h3>
						<chakra.p
							mb={5}
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('gray.600', 'gray.400')}
							fontSize={{ md: 'lg' }}
						>
							Herald is a changelog-as-a-service application to
							announce product updates to increase feature
							adoption, user satisfaction and grow revenue faster.
						</chakra.p>
						<Button
							w={{ base: 'full', sm: 'auto' }}
							size='lg'
							bg={useColorModeValue('gray.900', 'gray.700')}
							_hover={{
								bg: useColorModeValue('gray.700', 'gray.600'),
							}}
							color={useColorModeValue('gray.100', 'gray.200')}
							as='a'
							href='https://herald.opencatalysts.tech'
						>
							Learn More
						</Button>
					</Box>
					<Box
						w='full'
						h='full'
						d='flex'
						alignItems='center'
						justifyContent='center'
						py={24}
						bg={useColorModeValue('gray.200', 'gray.700')}
						rounded='lg'
						shadow='lg'
					>
						<Image
							src='/herald_logo.png'
							width={128}
							height={128}
						/>
					</Box>
				</SimpleGrid>
				{/* <SimpleGrid
					alignItems="center"
					columns={{ base: 1, md: 2 }}
					flexDirection="column-reverse"
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box h='full' d='flex' flexDirection='column' alignItems='start' justifyContent='center' order={{ base: "none", md: 2 }}>
						<chakra.h3
							mb={4}
							fontSize={{ base: "2xl", md: "4xl" }}
							fontWeight="extrabold"
							letterSpacing="tight"
							textAlign={{ base: "center", md: "left" }}
							color={useColorModeValue("gray.900", "gray.400")}
							lineHeight={{ md: "shorter" }}
						>
							Decide how you integrate Payments
						</chakra.h3>
						<chakra.p
							mb={5}
							textAlign={{ base: "center", sm: "left" }}
							color={useColorModeValue("gray.600", "gray.400")}
							fontSize={{ md: "lg" }}
						>
							Love to code? Next to our ready-made and free plugins you can use
							our expansive yet simple API; decide how you integrate Payments
							and build advanced and reliable products yourself from scratch.
						</chakra.p>
						<Button
							w={{ base: "full", sm: "auto" }}
							size="lg"
							bg={useColorModeValue("gray.900", "gray.700")}
							_hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
							color={useColorModeValue("gray.100", "gray.200")}
							as="a"

						>
							Learn More
						</Button>
					</Box>
					<Box
						w="full"
						h="full"
						py={48}
						bg={useColorModeValue("gray.200", "gray.700")}
					>
						Image
					</Box>
				</SimpleGrid> */}
			</Box>
		</Flex>
	);
};

export default Products;
