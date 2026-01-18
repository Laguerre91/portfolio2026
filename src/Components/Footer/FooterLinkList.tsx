import { Box, Link } from '@chakra-ui/react';
import type { LinkListProps } from '../../interfaces/interface';
import { useContact } from '../../context/ContactContext';

export const FooterLinkList = ({ title, links }: LinkListProps) => {

  const { openContact } = useContact();

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
          onClick={(e) => {
              if (link.label.toLowerCase() === 'contact') {
                e.preventDefault();
                openContact();
              }
            }}
          target={link.isExternal ? '_blank' : undefined}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};
