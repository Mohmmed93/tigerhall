'use client';

import { Box, Flex, Icon, Image, Input } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

// Import icons
import { useSearch } from '@/libs/context/SearchProvider';

import LocaleSwitcher from './LocaleSwitcher';

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  // const { colorMode, toggleColorMode } = useColorMode(); // Assuming you use Chakra UI's useColorMode hook
  const t = useTranslations('Header');

  return (
    <Box bg="black" px="4" py="3">
      <Flex w="100%" align="center">
        <Flex align="center" flex="1">
          <Image
            src="/assets/images/tigerhall-logo.png"
            alt="Tigerhall Logo"
            h={{ base: '6', md: '8' }}
            srcSet="/assets/images/tigerhall-logo-mobile.png 1x, /assets/images/tigerhall-logo-mobile@2x.png 2x"
            display={{ base: 'block', md: 'none' }}
          />
          <Image
            src="/assets/images/tigerhall-logo.png"
            alt="Tigerhall Logo"
            h="8"
            display={{ base: 'none', md: 'block' }} // Show only on web
          />
        </Flex>
        <Flex align="center" justify="center" flex="2">
          <Flex align="center" px="4" w="full">
            <Input
              placeholder={t('search')}
              bg="gray.700"
              borderRadius="md"
              border="none"
              color="white"
              _placeholder={{ color: 'gray.400' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Icon color="gray.400" ml="-8" />
          </Flex>
        </Flex>
        <Flex align="center" justify="flex-end" flex="1">
          <LocaleSwitcher />
          {/* just configured but not in really use */}
          {/* <IconButton
            aria-label="theme toggle"
            icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
            onClick={toggleColorMode}
            ml={2} // Adjust margin as needed
          /> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
