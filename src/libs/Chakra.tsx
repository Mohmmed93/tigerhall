'use client';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react';

import customTheme from '@/libs/styles/theme';

import { useApollo } from './apollo';

type ChakraProps = {
  children: React.ReactNode;
};

export const Chakra = ({ children }: ChakraProps) => {
  const apolloClient = useApollo(null);

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
          type="cookie"
        />
        <ChakraProvider
          colorModeManager={cookieStorageManager}
          theme={customTheme}
        >
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};
