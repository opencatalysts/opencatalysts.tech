import React from 'react';
import Image from 'next/image';
import {
	chakra,
	Box,
	Button,
	CloseButton,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	SimpleGrid,
	VStack,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

const Section = (props) => {
	const hbg = useColorModeValue('gray.50', 'brand.700');
	const tcl = useColorModeValue('gray.900', 'gray.50');
	const dcl = useColorModeValue('gray.500', 'gray.50');
	return (
		<Link
			m={-3}
			p={3}
			display='flex'
			alignItems='start'
			rounded='lg'
			_hover={{ bg: hbg }}
			href={props.href}
		>
			{props.icon}
			<Box ml={4}>
				<chakra.p fontSize='md' fontWeight='700' color={tcl}>
					{props.title}
				</chakra.p>
				<chakra.p mt={1} fontSize='sm' color={dcl}>
					{props.children}
				</chakra.p>
			</Box>
		</Link>
	);
};

const Features = (props) => {
	return (
		<React.Fragment>
			<SimpleGrid
				columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
				pos='relative'
				gap={{ base: 6, sm: 8 }}
				px={5}
				py={6}
				p={{ sm: 8 }}
			>
				<Section
					href='https://herald.opencatalysts.tech'
					icon={
						<Image src='/herald_logo.png' width={32} height={32} />
					}
					title='Herald'
				>
					Simple, open-source platform to announce product updates.
				</Section>
			</SimpleGrid>
		</React.Fragment>
	);
};

export default function Header() {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const cl = useColorModeValue('gray.800', 'white');
	const ref = React.useRef();

	const mobileNav = useDisclosure();

	const MobileNavContent = (
		<VStack
			pos='absolute'
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? 'flex' : 'none'}
			flexDirection='column'
			p={2}
			pb={4}
			m={2}
			bg={bg}
			spacing={3}
			rounded='sm'
			shadow='sm'
		>
			<CloseButton
				aria-label='Close menu'
				justifySelf='self-start'
				onClick={mobileNav.onClose}
			/>
			{/*<Button w='full' variant='ghost' leftIcon={<AiFillHome />}>*/}
			{/*	Dashboard*/}
			{/*</Button>*/}
			{/*<Button*/}
			{/*	w='full'*/}
			{/*	variant='solid'*/}
			{/*	colorScheme='brand'*/}
			{/*	leftIcon={<AiOutlineInbox />}*/}
			{/*>*/}
			{/*	Inbox*/}
			{/*</Button>*/}
			{/*<Button*/}
			{/*	w='full'*/}
			{/*	variant='ghost'*/}
			{/*	leftIcon={<BsFillCameraVideoFill />}*/}
			{/*>*/}
			{/*	Videos*/}
			{/*</Button>*/}
		</VStack>
	);
	return (
		<React.Fragment>
			<chakra.header
				d='flex'
				ref={ref}
				transition='box-shadow 0.2s'
				bg={bg}
				w='full'
				h='6rem'
				overflowY='hidden'
				flexDirection='column'
			>
				<chakra.div
					d='flex'
					w='full'
					h='6rem'
					mx='auto'
					maxW='container.xl'
				>
					<Flex
						w='full'
						h='full'
						alignItems='center'
						justifyContent='space-between'
					>
						<Flex align='flex-start'>
							<Link href='/'>
								<HStack>
									<Image
										src='/logo.png'
										width={40}
										height={40}
									/>
									<chakra.span
										fontSize='xl'
										fontWeight='bold'
										color={useColorModeValue(
											'gray.900',
											'white'
										)}
									>
										Open Catalysts
									</chakra.span>
								</HStack>
							</Link>
						</Flex>
						<Flex
							justify='flex-end'
							align='center'
							color='gray.400'
						>
							<HStack
								spacing='5'
								display={{ base: 'none', md: 'flex' }}
							>
								<Popover placement='bottom-end'>
									<PopoverTrigger>
										<Button
											bg={bg}
											color='gray.500'
											display='inline-flex'
											alignItems='center'
											fontSize='md'
											_hover={{ color: cl }}
											_focus={{ boxShadow: 'none' }}
											rightIcon={<IoIosArrowDown />}
										>
											Products
										</Button>
									</PopoverTrigger>
									<PopoverContent
										w='100vw'
										maxW='md'
										_focus={{ boxShadow: 'md' }}
									>
										<Features />
									</PopoverContent>
								</Popover>
								<Link
									isExternal
									aria-label='Go to Choc UI GitHub page'
									href='https://github.com/opencatalysts'
								>
									<Icon
										as={AiFillGithub}
										display='block'
										transition='color 0.2s'
										w='5'
										h='5'
										_hover={{ color: 'gray.600' }}
									/>
								</Link>
								<IconButton
									size='md'
									fontSize='lg'
									aria-label={`Switch to ${text} mode`}
									variant='ghost'
									color='current'
									ml={{ base: '0', md: '3' }}
									onClick={toggleMode}
									icon={<SwitchIcon />}
								/>
							</HStack>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='Open menu'
								fontSize='20px'
								color={useColorModeValue('gray.800', 'inherit')}
								variant='ghost'
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
					</Flex>
					{MobileNavContent}
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
}
