import { Box, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box position="sticky" top="4rem" h="fit-content">
      <Heading size="xl" color="text">
        Your Name
      </Heading>
      <Text color="muted" mt={2}>
        Your Title
      </Text>

      <Text color="muted" mt={4}>
        I build accessible, clean, and thoughtful digital experiences.
      </Text>

      {/* Navigation */}
<VStack align="start" spacing={2} mt={6}>
  {[
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CASE STUDIES", href: "#case-studies" },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      color="accent"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: "0",
        width: "0%",
        height: "1px",
        backgroundColor: "highlight",
        transition: "width 0.25s ease",
      }}
      _hover={{
        _after: {
          width: "100%",
        },
      }}
    >
      {item.label}
    </Link>
  ))}
</VStack>


      {/* Contact */}
      <Box mt={10}>
        <Text color="text" fontWeight="600" mb={3}>
          Contact
        </Text>

        <HStack spacing={4} divider={<Box h="16px" w="1px" bg="muted" />}>
          <Link href="https://github.com/yourusername" target="_blank" color="highlight">
            GitHub
          </Link>

          <Link href="{import.meta.env.VITE_LINKEDIN_URL}" target="_blank" color="highlight">
            LinkedIn
          </Link>

          <Link href="mailto:youremail@example.com" color="highlight">
            Email
          </Link>
        </HStack>
      </Box>

      <Text mt={10} color="muted" fontSize="sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Sidebar;
