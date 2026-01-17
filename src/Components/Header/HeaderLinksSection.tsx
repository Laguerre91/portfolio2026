import { Box } from '@chakra-ui/react';
import { HeaderLinkList } from './HeaderLinkList';
import type { Links } from '../../interfaces/interface';
import { NAVIGATION_LINKS } from '../../constants/navigation';

const navigateLinks: Links[] = NAVIGATION_LINKS;

export const HeaderLinksSection = () => {
  return (
    <Box id="navigation-list-header" className='navigation-list-header'>
      <HeaderLinkList title="NAVIGATE" links={navigateLinks} />
    </Box>
  );
}