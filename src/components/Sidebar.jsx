import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // success or error text

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSending(true);
    setStatusMessage(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatusMessage({ type: "success", text: "Message sent successfully!" });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Optional: close modal after a short delay
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
      }, 1200);
    } catch (error) {
      setStatusMessage({ type: "error", text: "Failed to send message. Try again." });
      console.error("Email error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box position="sticky" top="4rem" h="fit-content">
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

          {/* Replace mailto with modal trigger */}
          <Link onClick={onOpen} color="highlight" cursor="pointer">
            Email
          </Link>
        </HStack>
      </Box>

      {/* Contact Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />

        <ModalContent bg="bg" color="text" border="1px solid" borderColor="muted">
          <ModalHeader color="text">Send Me a Message</ModalHeader>
          <ModalCloseButton color="muted" />

          <ModalBody pb={4}>
            <FormControl mb={4}>
              <FormLabel color="subtleText">Your Name</FormLabel>
              <Input
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                bg="bg"
                borderColor="muted"
                focusBorderColor="accent"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel color="subtleText">Your Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                bg="bg"
                borderColor="muted"
                focusBorderColor="accent"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel color="subtleText">Subject</FormLabel>
              <Input
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                bg="bg"
                borderColor="muted"
                focusBorderColor="accent"
              />
            </FormControl>

            <FormControl>
              <FormLabel color="subtleText">Your Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                bg="bg"
                borderColor="muted"
                focusBorderColor="accent"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter flexDirection="column" alignItems="flex-end">
            <HStack>
              <Button
                bg="accent"
                color="bg"
                mr={3}
                _hover={{ bg: "brand.600" }}
                onClick={handleSubmit}
                isLoading={isSending}
                loadingText="Sending..."
                spinnerPlacement="start"
              >
                Send
              </Button>

              <Button
                variant="ghost"
                border="1px solid"
                borderColor="brand.600"
                color="muted"
                _hover={{ color: "text" }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </HStack>

            {statusMessage && (
              <Text
                mt={3}
                fontSize="sm"
                color={statusMessage.type === "success" ? "green.300" : "red.300"}
                textAlign="right"
              >
                {statusMessage.text}
              </Text>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* footer */}
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
