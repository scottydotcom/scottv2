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

import { skills } from "../data/skills";
import { hobbies } from "../data/hobbies";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="about">
      <Heading size="md" mb={4} color="accent">
        About Me
      </Heading>

      <Text color="muted" maxW="625px" lineHeight="1.7" mb={3}>
        {/* I build warm, intentional digital products shaped by clear architecture, cohesive flow, and the small
        system‑level details that make technology feel intuitive, reliable, and quietly elegant in everyday use. I care
        about creating work that feels thoughtful and grounded, where every decision supports a seamless, human‑centered
        experience. */}
        I build warm, intentional digital products shaped by clear architecture, cohesive flow, and subtle details that make technology feel intuitive, reliable, and seamless.
      </Text>

      {/* Skills Section */}
      <Box mt={2}>
        <Heading size="sm" color="highlight" mb={3} letterSpacing="0.5px" fontWeight="600">
          Skills I Use
        </Heading>

        <Flex wrap="wrap" gap={2} maxW="500px">
          {skills.map((skill) => (
            <Box
              key={skill}
              px={3}
              py={1}
              borderRadius="md"
              bg="surface"
              color="muted"
              fontSize="sm"
              border="1px solid"
              borderColor="surface"
              _hover={{
                transform: "scale(1.05)",
                filter: "brightness(1.15)",
              }}
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Box>

      <Link
        onClick={onOpen}
        color="highlight"
        cursor="pointer"
        display="inline-block"
        mt={3}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: "0",
          width: "0%", // start hidden
          height: "1px",
          backgroundColor: "highlight",
          transition: "width 0.25s ease",
        }}
        _hover={{
          _after: {
            width: "100%", // animate like sidebar
          },
        }}
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
          <ModalHeader color="subtleText">About Me</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="muted" mb={4}>
              {/* I’m a frontend engineer who focuses on building clean, accessible, and thoughtful digital experiences. I
              care deeply about visual harmony, component‑driven architecture, and creating interfaces that feel
              intuitive and emotionally warm. My work blends modern engineering practices with a strong sense of
              aesthetic polish. */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt velit porro aliquam. Voluptates
              consequuntur laborum inventore, voluptate nihil voluptas accusamus unde ut aliquid vitae tenetur animi
              eligendi accusantium non!
            </Text>

            <Text color="muted" mb={4}>
              {/* {/* I enjoy working with React, Chakra UI, Vite, and design systems. I’m passionate about workflow */}
              {/* optimization, theme design, and crafting digital environments that feel premium and intentional. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio fugiat, mollitia qui quod laboriosam
              nulla temporibus cumque fuga. Magni incidunt nemo quae, odio velit doloremque ullam ratione ducimus aut.
            </Text>

            <Text color="muted" mb={4}>
              {/* Outside of coding, I love exploring color palettes, customizing digital tools, and building small creative
              projects that help me refine my craft. */}
            </Text>
            <Text color="muted" mb={6}>
              Outside of coding, these are my hobbies keep me balanced
            </Text>

            {/* <Text color="highlight" fontWeight="600" mb={4}>Things I Enjoy</Text> */}

            {/* ⭐ 3×3 Grid of Hobbies */}
            <SimpleGrid columns={[2, 3]} spacing={6} mb={6}>
              {hobbies.map((item) => (
                <Flex
                  key={item.text}
                  as="li"
                  align="center"
                  gap={3}
                  mb={3}
                  color="muted"
                  fontSize="md"
                  position="relative"
                  pl="25px"
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "scale(1.03)",
                    filter: "brightness(1.15)",
                  }}
                >
                  <Box fontSize="2xl" color="highlight">
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
