import {
  Badge,
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Image,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiClock, FiHeadphones, FiShare2 } from 'react-icons/fi';

const PodcastCard = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box position="relative" h="200px" bg="gray.200">
        <Image
          src="https://images.staging.tigerhall.io/resize/244x120/2024-02-13/d9057f82-c434-4666-95e8-d9c5d7486365.jpg"
          alt="Podcast Image"
          objectFit="cover"
          w="full"
          h="full"
          position="absolute"
        />
        <Box position="absolute" top="0" left="0" zIndex="10">
          <Box
            bg="white"
            borderBottomRightRadius="lg"
            borderTopLeftRadius="md"
            px="2"
            py="1"
          >
            <Badge borderRadius="full" px="2" colorScheme="orange">
              30% Completed
            </Badge>
          </Box>
        </Box>
        <Circle
          size="8"
          bg="orange.500"
          color="white"
          position="absolute"
          bottom="2"
          left="2"
        >
          <FiHeadphones />
        </Circle>
        <Flex
          position="absolute"
          bottom="2"
          right="2"
          alignItems="center"
          bg="blackAlpha.700"
          borderRadius="md"
          px="2"
        >
          <FiClock color="white" />
          <Text color="white" ml="1" fontWeight="bold">
            20m
          </Text>
        </Flex>
        <Progress
          value={30}
          size="xs"
          colorScheme="orange"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          borderBottomRadius="lg"
        />
      </Box>

      <Box p="6">
        <Text fontSize="sm" color="gray.500" textTransform="uppercase" mb="2">
          Communicating as a Leader
        </Text>
        <VStack align="start" spacing="2">
          <Text fontWeight="bold" fontSize="lg" lineHeight="tight">
            Peak Performance: Going From Good to Great with Simon Taudel
          </Text>
          <Text color="gray.500">Jane Doe</Text>
          <Text color="gray.500">Subway APAC</Text>
        </VStack>
        <HStack justifyContent="flex-end" spacing="2" mt="4">
          <IconButton
            aria-label="Share"
            icon={<FiShare2 />}
            variant="ghost"
            color="orange"
            size="sm"
          />
          <IconButton
            aria-label="Bookmark"
            icon={<FiBookmark />}
            variant="ghost"
            color="orange"
            size="sm"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default PodcastCard;
