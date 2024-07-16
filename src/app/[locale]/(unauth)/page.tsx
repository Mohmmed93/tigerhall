import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import PodcastCard from '@/components/Podcast';

export default function Index() {
  return (
    <>
      {/* Content rendering here */}
      <Box p="6">
        <Text fontSize="x-large" color="white" ml="1" p={2} fontWeight="bold">
          Tigerhall Library
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          spacing="6"
        >
          {Array.from({ length: 15 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <PodcastCard key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
