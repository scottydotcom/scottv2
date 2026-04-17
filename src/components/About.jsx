import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { hobbies } from "../data/hobbies";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="about">
      <Heading size="md" mb={4} color="accent">
        About Me
      </Heading>

      <Text color="muted" mb={3}>
        I build accessible, clean, and thoughtful digital experiences.
      </Text>

      <Link
        onClick={onOpen}
        color="accent"
        cursor="pointer"
        display="inline-block"
        mt={2}
      >
        Read More →
      </Link>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />

        <ModalContent
          bg="bg"
          color="text"
          border="1px solid"
          borderColor="surface"
          transform={{
            base: "translateX(0)",
            md: "translateX(-380px)",
          }}
        >
          <ModalHeader>About Me</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="muted" mb={4}>
              I’m a frontend engineer who focuses on building clean, accessible,
              and thoughtful digital experiences. I care deeply about visual
              harmony, component‑driven architecture, and creating interfaces
              that feel intuitive and emotionally warm.
            </Text>

            <Text color="muted" mb={6}>
              Outside of coding, here are a few things that inspire me and keep
              me balanced:
            </Text>

            {/* ⭐ 3×3 Grid of Hobbies */}
            <SimpleGrid columns={[2, 3]} spacing={6} mb={6}>
              {hobbies.map((item) => (
                <Flex
                  key={item.text}
                  direction="column"
                  align="center"
                  justify="center"
                  gap={2}
                  color="muted"
                >
                  <Box fontSize="2xl" color="accent">
                    <item.icon />
                  </Box>
                  <Text fontSize="md">{item.text}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
