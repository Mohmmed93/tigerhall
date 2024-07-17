'use client';

import { Flex, Select } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <Flex>
      <Select
        value={locale}
        onChange={handleChange}
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="md"
        fontWeight="medium"
        focusBorderColor="blue.500"
        textColor="white"
      >
        {AppConfig.locales.map((elt) => (
          <option key={elt} value={elt}>
            {elt.toUpperCase()}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
