import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { GET_CONTENT_CARDS } from '@/libs/apollo/getContent';
import { PAGE_LIMIT, SEARCH_TIMEOUT } from '@/utils/Constants';

const useContentCards = (searchTerm: string, initialOffset: number = 0) => {
  const [debouncedSearchTerm] = useDebounce(searchTerm, SEARCH_TIMEOUT);
  const [offset, setOffset] = useState(initialOffset);
  const [contentCards, setContentCards] = useState<Podcast[]>([]); // State to store fetched data

  const { loading, refetch, data } = useQuery<{
    contentCards: ContentCard;
  }>(GET_CONTENT_CARDS, {
    variables: { keyword: debouncedSearchTerm, limit: PAGE_LIMIT, offset },
    fetchPolicy: 'cache-and-network', // Ensure we always have fresh data
  });

  const fetchContentCards = useCallback(async () => {
    try {
      const { data: refetchData } = await refetch({
        keyword: debouncedSearchTerm,
        limit: 10,
        offset,
      });
      if (offset === 0) {
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
    if (data?.contentCards?.edges && offset === 0) {
      setContentCards(data?.contentCards?.edges);
    }
  }, [data, offset]);

  useEffect(() => {
    fetchContentCards();
  }, [debouncedSearchTerm, fetchContentCards]);

  useEffect(() => {
    setOffset(0);
  }, [debouncedSearchTerm]);

  return { loading, contentCards, fetchContentCards, setOffset, offset, data };
};

export default useContentCards;
