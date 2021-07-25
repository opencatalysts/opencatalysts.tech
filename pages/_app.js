import Head from 'next/head';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Head>
					<title>
						Open Catalysts - Open-source micro-saas applications for
						makers
					</title>
				</Head>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
