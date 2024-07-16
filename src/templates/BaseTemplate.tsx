import { Box, Divider, Link } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <Box w="full" bg="#0E0F0F" fontFamily="body">
      <Box maxW="full" mx="auto">
        <nav>{props.header}</nav>
        <Divider borderColor="#1C1E1F" borderWidth="2px" />
        <Box color="black" as="main" py={8}>
          {props.children}
        </Box>
        <Box
          as="footer"
          borderTop="1px"
          borderColor="gray.300"
          py={8}
          textAlign="center"
          fontSize="sm"
        >
          © {new Date().getFullYear()} {AppConfig.name}. {t('made_with')}{' '}
          <Link
            href="https://creativedesignsguru.com"
            color="blue.700"
            _hover={{ borderBottom: '2px', borderColor: 'blue.700' }}
          >
            CreativeDesignsGuru
          </Link>
          .
        </Box>
      </Box>
    </Box>
  );
};

export { BaseTemplate };
