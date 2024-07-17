/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

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

interface PodcastCardProps {
  index: number;
  data: Podcast;
}
