import { Box, Heading, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box position="sticky" top="4rem" h="fit-content">
      <Heading size="xl" color="text">Your Name</Heading>
      <Text color="muted" mt={2}>Your Title</Text>

      <Text color="muted" mt={4}>
        I build accessible, clean, and thoughtful digital experiences.
      </Text>

      {/* Navigation */}
      <VStack align="start" spacing={2} mt={6}>
        <Link href="#about" color="accent">ABOUT</Link>
        <Link href="#experience" color="accent">EXPERIENCE</Link>
        <Link href="#projects" color="accent">PROJECTS</Link>
        <Link href="#case-studies" color="accent">CASE STUDIES</Link>
      </VStack>

      {/* Contact Section */}
      <Box mt={10}>
        <Text color="text" fontWeight="600" mb={3}>
          Contact
        </Text>

        {/* All icons in one row */}
        <HStack spacing={5}>
          <Link href="https://github.com/yourusername" target="_blank" color="highlight">
            <Icon as={FaGithubSquare } boxSize={6} />
          </Link>

          <Link href="https://linkedin.com/in/yourusername" target="_blank" color="highlight">
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>

          <Link href="mailto:youremail@example.com" color="highlight">
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
        </HStack>
      </Box>

      <Text mt={10} color="muted" fontSize="sm">
        © 2026 Your Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Sidebar;
