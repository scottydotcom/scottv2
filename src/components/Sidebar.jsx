import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box position="sticky" top="4rem" h="fit-content">
      <Heading size="xl" color="text">Your Name</Heading>
      <Text color="muted" mt={2}>Your Title</Text>

      <Text color="muted" mt={4}>
        I build accessible, clean, and thoughtful digital experiences.
      </Text>

      <VStack align="start" spacing={2} mt={6}>
        <Link href="#about" color="accent">ABOUT</Link>
        <Link href="#experience" color="accent">EXPERIENCE</Link>
        <Link href="#projects" color="accent">PROJECTS</Link>
        <Link href="#case-studies" color="accent">CASE STUDIES</Link>
      </VStack>

      <VStack align="start" spacing={2} mt={8}>
        <Link color="muted">GitHub</Link>
        <Link color="muted">LinkedIn</Link>
        <Link color="muted">Instagram</Link>
      </VStack>

      <Text mt={10} color="muted" fontSize="sm">
        © 2026 Your Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Sidebar;