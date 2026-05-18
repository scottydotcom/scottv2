import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Heading size="xl" color="textSubtle">
        Scott
      </Heading>

      <Text color="muted" mt={2}>
        Full Stack · AI · UI/UX Designer
      </Text>

      <Text color="muted" mt={4}>
        I create intuitive products unifying engineering, AI, and design seamlessly.
      </Text>
    </Box>
  );
};

export default Hero;
