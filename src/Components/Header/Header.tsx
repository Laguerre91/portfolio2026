import { Heading, Stack, Text, Box, Container } from "@chakra-ui/react";
import { HeaderLinksSection } from "./HeaderLinksSection";
import './Header.css';

const Header = () => {  
    return (
        <Stack id="header">
            <Container className="top-container">
                <Box className="higher-text">
                    <Text>Software Developer</Text>
                </Box>
                <Box>
                    <HeaderLinksSection />
                </Box>
            </Container>
            <Heading className="header-title">LARA AGUERRE</Heading>

            <Box className="lower-text">
                <Text>Based in Madrid</Text>
            </Box>
        </Stack>
    )
 };

export default Header;