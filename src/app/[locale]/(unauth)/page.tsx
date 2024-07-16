import { Box, SimpleGrid } from '@chakra-ui/react';

export default function Index() {
  return (
    <>
      {/* Content rendering here */}
      <Box p="6">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          spacing="6"
        />
      </Box>
    </>
  );
}
