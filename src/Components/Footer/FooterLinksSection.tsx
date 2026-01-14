import { Box } from '@chakra-ui/react';
import { FooterLinkList } from './FooterLinkList';
import type { Links } from '../../interfaces/interface';
import { NAVIGATION_LINKS } from '../../constants/navigation';

const navigateLinks: Links[] = NAVIGATION_LINKS;

const socialLinks: Links[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lara-aguerre-developer/' },
  { label: 'GitHub', href: 'https://github.com/Laguerre91' },
];

export const FooterLinksSection = () => {
  return (
    <Box id="navigation-list">
      <FooterLinkList title="NAVIGATE" links={navigateLinks} />
      <FooterLinkList title="SOCIAL" links={socialLinks} />
    </Box>
  );
};
