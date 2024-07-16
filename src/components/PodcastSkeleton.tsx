import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';

const PodcastSkeleton: React.FC = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="black"
      bg="white"
      position="relative"
      minHeight="280px"
    >
      <Skeleton height="200px" />

      <Box p="2" bg="white">
        <Skeleton height="16px" w="30%" mb="2" />
        <Skeleton height="20px" mb="2" />

        <VStack align="start" spacing="0" mt={2}>
          <Skeleton height="16px" w="60%" mb="1" />
          <Skeleton height="16px" w="50%" />
        </VStack>

        <HStack justifyContent="flex-end" spacing="0" mt={2}>
          <Skeleton height="10px" w="20px" />
          <Skeleton height="10px" w="20px" />
        </HStack>
      </Box>
    </Box>
  );
};

export default PodcastSkeleton;
