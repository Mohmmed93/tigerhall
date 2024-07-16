import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
    // TIGER_HALL_CONTENT_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_TIGER_HALL_CONTENT_URL: z.string().optional(),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    NEXT_PUBLIC_TIGER_HALL_CONTENT_URL:
      process.env.NEXT_PUBLIC_TIGER_HALL_CONTENT_URL,
  },
});
