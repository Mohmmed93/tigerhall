'use client';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect } from 'react';

import PodcastCard from '@/components/Podcast';
import PodcastSkeleton from '@/components/PodcastSkeleton';
import useContentCards from '@/hooks/useContentCards';
import { useSearch } from '@/libs/context/SearchProvider';

// Define types for the content cards
const Index = () => {
  const { searchTerm } = useSearch();
  const t = useTranslations('MainPage');

  const { loading, contentCards, setOffset, offset, data } =
    useContentCards(searchTerm);

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight - 0.5
    )
      return;
    if (contentCards.length < (data?.contentCards.meta.total || 0)) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  }, [contentCards]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentCards]);

  const combinedText = `${t('org_name')} ${t('library')}`;

  return (
    <Box p="6" pb="10">
      <Text color="white" ml="1" fontWeight="bold" fontSize="2xl" pb={5}>
        {combinedText}
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing="6">
        {loading && offset === 0 // Show skeleton only on initial load
          ? Array.from({ length: 15 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <PodcastSkeleton key={index} />
            ))
          : contentCards?.map((podcast) => (
              // eslint-disable-next-line react/no-array-index-key
              <PodcastCard data={podcast} key={podcast.id} />
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
