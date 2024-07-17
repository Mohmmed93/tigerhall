'use client';

import { useQuery } from '@apollo/client';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import PodcastCard from '@/components/Podcast';
import PodcastSkeleton from '@/components/PodcastSkeleton';
import { GET_CONTENT_CARDS } from '@/libs/apollo/getContent';
import { useSearch } from '@/libs/context/SearchProvider';

// Define types for the content cards
interface Image {
  uri: string;
}

interface Category {
  name: string;
}

interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

interface Podcast {
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
  length: number;
}

interface ContentCard {
  edges: Podcast[];
}

const Index = () => {
  const { searchTerm } = useSearch();
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [offset, setOffset] = useState(0); // State for pagination offset
  const [contentCards, setContentCards] = useState<Podcast[]>([]); // State to store fetched data
  const t = useTranslations('MainPage');

  // GraphQL query with search term and pagination variables
  const { loading, refetch, data } = useQuery<{
    contentCards: ContentCard;
  }>(GET_CONTENT_CARDS, {
    variables: { keyword: debouncedSearchTerm, limit: 15, offset },
    fetchPolicy: 'cache-and-network', // Ensure we always have fresh data
  });
  const fetchContentCards = useCallback(async () => {
    try {
      const { data: refetchData } = await refetch({
        keyword: debouncedSearchTerm,
        limit: 10,
        offset,
      });
      if (
        refetchData === undefined ||
        refetchData.contentCards.edges.length === 0
      )
        if (offset === 0) {
          // To simulating infinite scrolling
          // setOffset((prevOffset) => prevOffset - 10);
          setContentCards(refetchData.contentCards.edges);
        } else {
          setContentCards((prevCards) => [
            ...prevCards,
            ...refetchData.contentCards.edges,
          ]);
        }
    } catch (error) {
      console.error('Error fetching content cards:', error);
    }
  }, [debouncedSearchTerm, offset, refetch]);

  useEffect(() => {
    if (data?.contentCards?.edges) {
      setContentCards((prevCards) => [
        ...prevCards,
        ...data.contentCards.edges,
      ]);
    }
  }, [data]);

  // Fetch content cards initially and on search term or offset change
  useEffect(() => {
    fetchContentCards();
  }, [debouncedSearchTerm, offset, fetchContentCards]);

  // Function to handle infinite scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight - 0.5
    )
      return;
    setOffset((prevOffset) => prevOffset + 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const combinedText = `${t('org_name')} ${t('library')}`;

  return (
    <Box p="6" pb="20">
      <Text color="white" ml="1" fontWeight="bold" fontSize="2xl" pb={5}>
        {combinedText}
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing="6">
        {loading && offset === 0 // Show skeleton only on initial load
          ? Array.from({ length: 15 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <PodcastSkeleton key={index} />
            ))
          : contentCards?.map((i, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <PodcastCard index={index} data={i} key={index} />
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
