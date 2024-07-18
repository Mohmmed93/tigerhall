/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

interface Image {
  id: string;
  uri: string;
}

interface Category {
  id: string;
  name: string;
}

interface Expert {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

interface Podcast {
  id: string;
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
  length: number;
}

interface Meta {
  total: number;
  limit: number;
}

interface ContentCard {
  edges: Podcast[];
  meta: Meta;
}

interface PodcastCardProps {
  data: Podcast;
}

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutExtendedProps extends LayoutProps {
  params: { locale: string };
}
