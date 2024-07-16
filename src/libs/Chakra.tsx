'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react';

import customTheme from '@/libs/styles/theme';

type ChakraProps = {
  children: React.ReactNode;
};

export const Chakra = ({ children }: ChakraProps) => {
  return (
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
  );
};
