import { Box, Link } from '@chakra-ui/react';
import type { FooterLinkListProps } from '../../interfaces/interface';

export const FooterLinkList = ({ title, links }: FooterLinkListProps) => {
  return (
    <Box className="links-container">
      <Box className="navigate-title">
        <p>{title}</p>
      </Box>

      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="footer-link"
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};
