import { Container, Stack } from '@chakra-ui/react';
import './Footer.css';
import { FooterLinksSection } from './FooterLinksSection';
import { FooterTextSection } from './FooterTextSection';

const Footer = () => {
  return (
    <Stack id="footer">
      <Container className="top-container">
        <FooterLinksSection />
        <FooterTextSection />
      </Container>

      <p className="footer-title">LARA AGUERRE</p>
      <p className="footer-text">© 2026</p>
    </Stack>
  );
};

export default Footer;
