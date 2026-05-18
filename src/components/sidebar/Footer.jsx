import { Stack, Text } from "@chakra-ui/react";

const SidebarFooter = () => {
  return (
    <Stack mt="auto" spacing={1}>
      <Text color="muted" fontSize="sm">
        Built and designed by me — soraplex.
      </Text>
      <Text color="muted" fontSize="sm">
        © {new Date().getFullYear()} All rights reserved.
      </Text>
    </Stack>
  );
};

export default SidebarFooter;