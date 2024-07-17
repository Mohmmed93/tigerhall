import {
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
import { useTranslations } from 'next-intl';
import React from 'react';
import { FiBookmark, FiClock, FiHeadphones, FiShare2 } from 'react-icons/fi';

import { resizeImage } from '@/utils/imageResize';

const PodcastCard: React.FC<PodcastCardProps> = ({ index, data }) => {
  const { image, categories, name, experts, length } = data;

  const resizedImageUrl = resizeImage(image.uri, 244, 120);

  const t = useTranslations('Podcast');

  return (
    <Box
      key={index}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="black"
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box position="relative" h="200px" bg="gray.200">
          <Image
            src={resizedImageUrl}
            alt="Podcast Image"
            objectFit="cover"
            w="full"
            h="full"
            position="absolute"
          />
          <Box position="absolute" top="0" left="0">
            <Box bg="white" borderBottomRightRadius="lg" px="3" py="1.5">
              <Flex align="center">
                <Image
                  src="/assets/images/percentage.png"
                  alt="Percentage Image"
                  boxSize="20px" // Adjust size as needed
                  mr="2" // Margin to space out the image and text
                />
                <Text>30% {t('completed')}</Text>
              </Flex>
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
              {length}m
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

        <Box p="2" bg="white" flex="1">
          <Text
            fontSize="sm"
            color="gray.500"
            textTransform="uppercase"
            noOfLines={1}
          >
            {categories?.map((r) => r.name).join(', ')}
          </Text>

          <Text fontWeight="bold" fontSize="lg" lineHeight="normal">
            {name}
          </Text>
          <VStack align="start" spacing="0" mt={2}>
            {experts?.map((r, l) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={l}>
                <Text as="b" color="gray.500">
                  {r.firstName} {r.lastName}
                </Text>
                <Text color="gray.500" noOfLines={1}>
                  {r.company}
                </Text>
              </React.Fragment>
            ))}
          </VStack>
        </Box>
      </Box>

      <Box p="2" bg="white">
        <HStack justifyContent="flex-end" spacing="0">
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
