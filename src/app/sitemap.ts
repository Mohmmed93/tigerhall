import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/Helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://tigerhall.com/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Add more URLs here
  ];
}
