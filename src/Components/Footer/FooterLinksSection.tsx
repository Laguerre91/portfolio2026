import { Box } from '@chakra-ui/react';
import { FooterLinkList } from './FooterLinkList';
import type { FooterLink } from '../../interfaces/interface';

const navigateLinks: FooterLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks: FooterLink[] = [
  { label: 'LinkedIn', href: '#home' },
  { label: 'GitHub', href: '#about' },
];

export const FooterLinksSection = () => {
  return (
    <Box id="navigation-list">
      <FooterLinkList title="NAVIGATE" links={navigateLinks} />
      <FooterLinkList title="SOCIAL" links={socialLinks} />
    </Box>
  );
};
