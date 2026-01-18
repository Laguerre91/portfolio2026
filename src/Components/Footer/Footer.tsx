import { useRef } from "react";
import { Container, Stack, Text } from '@chakra-ui/react';
import './Footer.css';
import { FooterLinksSection } from './FooterLinksSection';
import { FooterTextSection } from './FooterTextSection';
import { useScrollPosition } from '../About/useScrollPosition';

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);  

    const progress = useScrollPosition(footerRef, 0.5);
    const titleProgress = useScrollPosition(titleRef, 0.4);
  
    const borderRadius = 70 * progress;
    const titleTranslateY = 150 * (1 - titleProgress);

  return (
    <Stack id="footer" ref={footerRef} className="footer-container"
      style={{
                borderTopLeftRadius: `${borderRadius}px`,
                borderTopRightRadius: `${borderRadius}px`,
      }}>
      <Container className="top-container">
        <FooterLinksSection />
        <FooterTextSection />
      </Container>

      <Text ref={titleRef} className="footer-title" style={{ transform: `translateY(${titleTranslateY}px)` }}>LARA AGUERRE</Text>
      <Text className="footer-text">© 2026</Text>
    </Stack>
  );
};

export default Footer;
