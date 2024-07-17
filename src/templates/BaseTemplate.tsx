import { Box, Link } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <Box
      w="full"
      bg="#0E0F0F"
      fontFamily="body"
      minHeight="100vh"
      position="relative"
    >
      <Box maxW="full" mx="auto">
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="999"
          bg="#0E0F0F"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        >
          {props.header}
        </Box>

        <Box color="black" as="main" py={10} mt={10}>
          {props.children}
        </Box>

        <Box
          position="fixed"
          as="footer"
          borderTop="1px"
          borderColor="#1C1E1F"
          py={8}
          textAlign="center"
          fontSize="sm"
          zIndex="999"
          bottom="0"
          left="0"
          right="0"
          textColor="white"
          bg="#0E0F0F"
        >
          © {new Date().getFullYear()} {AppConfig.name}. {t('made_with')}{' '}
          <Link
            href="https://creativedesignsguru.com"
            color="white"
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
