import { Box } from '@chakra-ui/react';
import { FooterLinkList } from './FooterLinkList';
import type { Links } from '../../interfaces/interface';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../../constants/navigation';

const navigateLinks: Links[] = NAVIGATION_LINKS;

const socialLinks: Links[] = SOCIAL_LINKS;

export const FooterLinksSection = () => {
  return (
    <Box id="navigation-list">
      <FooterLinkList title="NAVIGATE" links={navigateLinks} />
      <FooterLinkList title="SOCIAL" links={socialLinks} />
    </Box>
  );
};
