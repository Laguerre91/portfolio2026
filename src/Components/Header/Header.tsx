import { Heading, Stack, Text, Box } from "@chakra-ui/react";
import './Header.css';

const Header = () => {  
    return (
        <Stack id="header">
            <Box className="higher-text">
                <Text>Software Developer</Text>
            </Box>
            <Heading className="header-title">LARA AGUERRE</Heading>

            <Box className="lower-text">
                <Text>Based in Madrid</Text>
            </Box>
        </Stack>
    )
 };

export default Header;