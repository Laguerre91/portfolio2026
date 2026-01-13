import { Container, Stack, Text } from '@chakra-ui/react';
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

      <Text className="footer-title">LARA AGUERRE</Text>
      <Text className="footer-text">© 2026</Text>
    </Stack>
  );
};

export default Footer;
