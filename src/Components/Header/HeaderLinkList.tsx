import { Box, Link } from '@chakra-ui/react';
import type { LinkListProps } from '../../interfaces/interface';

export const HeaderLinkList = ({ links }: LinkListProps) => {
  return (
    <Box className="links-container">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="header-link underline-hover"
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
}