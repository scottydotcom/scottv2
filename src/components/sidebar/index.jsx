import { Box, Stack } from "@chakra-ui/react";
import Hero from "./Hero";
import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <Box as="aside" position="sticky" top="4rem" h="fit-content">
      <Stack>
        <Hero />
        <Nav />
        <Contact />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Sidebar;