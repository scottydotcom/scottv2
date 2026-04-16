import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box id="about">
      <Heading size="md" mb={4} color="accent">
        About Me
      </Heading>

      <Text color="muted" maxW="600px">
        Write a short blurb about who you are, what you do, and what drives your work.
        Keep it warm, human, and focused on your strengths.
      </Text>
    </Box>
  );
}
