import { Box, Flex, Icon, Image, Input } from '@chakra-ui/react';
import React from 'react';

import LocaleSwitcher from './LocaleSwitcher';

const Header: React.FC = () => {
  return (
    <Box bg="black" px="4" py="3">
      <Flex w="100%" align="center">
        <Flex align="center" flex="1">
          <Image
            src="/assets/images/tigerhall-logo.png"
            alt="Tigerhall Logo"
            h="8"
          />
        </Flex>
        <Flex align="center" justify="center" flex="2">
          <Flex align="center" px="4" w="full">
            <Input
              placeholder="Search..."
              bg="gray.700"
              borderRadius="md"
              border="none"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />
            <Icon color="gray.400" ml="-8" />
          </Flex>
        </Flex>
        <Flex align="center" justify="flex-end" flex="1">
          <LocaleSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
