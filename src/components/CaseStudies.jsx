import {
  Box,
  Heading,
  Flex,
  Text,
  Tag,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { caseStudies } from "../data/caseStudies";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (index) => {
    setCurrentIndex(index);
    onOpen();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < caseStudies.length ? prev + 1 : 0));
  };

  return (
    <Box id="case-studies">
      <Heading size="md" mb={6} color="accent">
        Case Studies
      </Heading>

      <Flex direction="column" gap={6}>
        {caseStudies.map((study, i) => (
          <Box
            key={i}
            p={6}
            borderRadius="lg"
            borderBottom="1px solid"
            borderColor="surface"
            transition="0.2s ease"
            _hover={{ bg: "surface"}}
          >
            <Heading size="md" color="text">
              {study.title}
            </Heading>

            <Text color="muted" mt={2} mb={4}>
              {study.summary}
            </Text>

            <Flex gap={2} wrap="wrap">
              {study.tags.map((tag, idx) => (
                <Tag key={idx} bg="olive.700" color="olive.100">
                  {tag}
                </Tag>
              ))}
            </Flex>

            <Link onClick={() => openModal(i)} color="accent" mt={4} display="inline-block" cursor="pointer">
              Read Case Study →
            </Link>
          </Box>
        ))}
      </Flex>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />

        <ModalContent bg="bg" color="text" border="1px solid" borderColor="surface">
          <ModalHeader>{caseStudies[currentIndex].title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="muted" mb={4}>
              {caseStudies[currentIndex].fullText || "Full case study content goes here."}
            </Text>

            <Button onClick={handleNext} bg="olive.700" color="olive.100" _hover={{ bg: "olive.600" }} mt={4}>
              Next Case Study →
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CaseStudies;
