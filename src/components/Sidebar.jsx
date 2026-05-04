// import { Box, Heading, Text, VStack, HStack, Stack, Link } from "@chakra-ui/react";

// const Sidebar = () => {
//   return (
//     <Box position="sticky" top="4rem" h="fit-content">
//       <Heading size="xl" color="textSubtle">
//         Scott
//       </Heading>
//       <Text color="muted" mt={2}>
//         Full Stack · AI · UI/UX Designer
//       </Text>
//       <Text color="muted" mt={4}>
//         I build scalable, intuitive experiences across engineering, AI, and design.
//       </Text>

//       {/* Navigation */}
//       <VStack align="start" spacing={2} mt={6}>
//         {[
//           { label: "ABOUT", href: "#" },
//           { label: "EXPERIENCE", href: "#experience" },
//           { label: "PROJECTS", href: "#projects" },
//           { label: "CASE STUDIES", href: "#case-studies" },
//         ].map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             color="accent"
//             position="relative"
//             _after={{
//               content: '""',
//               position: "absolute",
//               bottom: "-2px",
//               left: "0",
//               width: "0%",
//               height: "1px",
//               backgroundColor: "highlight",
//               transition: "width 0.25s ease",
//             }}
//             _hover={{
//               _after: {
//                 width: "100%",
//               },
//             }}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </VStack>

//       {/* Contact */}
//       <Box mt={10}>
//         <Text color="subtleText" fontWeight="600" mb={3}>
//           Contact
//         </Text>

//         <HStack spacing={4} divider={<Box h="16px" w="1px" bg="muted" />}>
//           <Link href="https://github.com/soraplex" target="_blank" color="highlight">
//             GitHub
//           </Link>

//           <Link href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" color="highlight">
//             LinkedIn
//           </Link>

//           <Link href="mailto:youremail@example.com" color="highlight">
//             Email
//           </Link>
//         </HStack>
//       </Box>

//       {/* footer */}
//       <Stack mt={10} spacing={1}>
//         <Text color="muted" fontSize="sm">
//           Built and designed by me — soraplex.
//         </Text>
//         <Text color="muted" fontSize="sm">
//           © {new Date().getFullYear()} All rights reserved.
//         </Text>
//       </Stack>
//     </Box>
//   );
// };

// export default Sidebar;

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

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onClose();
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
        I build scalable, intuitive experiences across engineering, AI, and design.
      </Text>

      {/* Navigation */}
      <VStack align="start" spacing={2} mt={6}>
        {[
          { label: "ABOUT", href:"#" },
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

          <ModalFooter>
            <Button bg="accent" color="bg" mr={3} _hover={{ bg: "brand.600" }} onClick={handleSubmit}>
              Send
            </Button>

            <Button variant="ghost" color="muted" _hover={{ color: "text" }} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* footer */}
      <Stack mt={10} spacing={1}>
        <Text color="muted" fontSize="sm">
          Built and designed by me — scottydotcom.
        </Text>
        <Text color="muted" fontSize="sm">
          © {new Date().getFullYear()} All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Sidebar;
