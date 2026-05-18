import { Box, Text, HStack, Link, useDisclosure } from "@chakra-ui/react";
import { useContact } from "./contactModal/useContact";
import ContactForm from "./contactModal/ContactForm";

const SidebarContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contact = useContact();

  return (
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
  );
};

export default SidebarContact;