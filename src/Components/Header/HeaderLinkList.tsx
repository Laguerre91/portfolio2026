import { Box, Link } from '@chakra-ui/react';
import type { LinkListProps } from '../../interfaces/interface';
import { useContact } from '../../context/ContactContext';

export const HeaderLinkList = ({ links }: LinkListProps) => {
  const { openContact } = useContact();

  return (
    <Box className="links-container-header">
      {links.map((link) => {
        const isContact = link.label.toLowerCase() === 'contact';

        return (
          <Link
            key={link.label}
            href={isContact ? undefined : link.href}
            className="header-link underline-hover"
            onClick={(e) => {
              if (isContact) {
                e.preventDefault();
                openContact();
              }
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </Box>
  );
};
