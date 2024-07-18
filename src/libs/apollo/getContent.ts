import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($keyword: String!, $limit: Int!, $offset: Int!) {
    contentCards(
      filter: {
        limit: $limit
        offset: $offset
        keywords: $keyword
        types: [PODCAST]
      }
    ) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
          length
          id
        }
      }
      meta {
        total
        limit
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
