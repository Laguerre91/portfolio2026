import { Box, Link } from '@chakra-ui/react';
import type { LinkListProps } from '../../interfaces/interface';

export const FooterLinkList = ({ title, links }: LinkListProps) => {
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
          target={link.isExternal ? '_blank' : undefined}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};
