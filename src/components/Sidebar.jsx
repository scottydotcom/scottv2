import { Box, Heading, Text, VStack, HStack, Stack, Link, useDisclosure } from "@chakra-ui/react";
import { useContact } from "./contactModal/useContact";
import ContactForm from "./contactModal/ContactForm.jsx";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contact = useContact();

  return (
    <Box position="sticky" top="4rem" h="fit-content">
      {/* Hero */}
      <Heading size="xl" color="textSubtle">
        Scott
      </Heading>

      <Text color="muted" mt={2}>
        Full Stack · AI · UI/UX Designer
      </Text>

      <Text color="muted" mt={4}>
        I create intuitive products unifying engineering, AI, and design seamlessly.
      </Text>

      {/* Navigation */}
      <VStack align="start" spacing={2} mt={6}>
        {[
          { label: "ABOUT", href: "#" },
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
              _after: { width: "100%" },
            }}
          >
            {item.label}
          </Link>
        ))}
      </VStack>

      {/* Contact Links */}
      <Box mt={10}>
        <Text color="subtleText" fontWeight="600" mb={3}>
          Contact
        </Text>

        <HStack spacing={4} divider={<Box h="16px" w="1px" bg="muted" />}>
          <Link href="https://github.com/soraplex" target="_blank" color="highlight">
            GitHub
          </Link>
          <Link href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" color="highlight">
            LinkedIn
          </Link>
          <Link onClick={onOpen} color="highlight" cursor="pointer">
            Email
          </Link>
        </HStack>

        <ContactForm {...contact} isOpen={isOpen} onClose={onClose} />
      </Box>

      {/* Footer */}
      <Stack mt={720} spacing={1}>
        <Text color="muted" fontSize="sm">
          Built and designed by me — soraplex.
        </Text>
        <Text color="muted" fontSize="sm">
          © {new Date().getFullYear()} All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Sidebar;