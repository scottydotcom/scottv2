import { Grid, Box } from "@chakra-ui/react";

import Sidebar from "./components/Sidebar";
// import Hero from "./components/Sidebar/Hero";
import MobileMenu from "./components/MobileMenu";

import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";

const App = () => {
  return (
    <Box>
      {/* MOBILE MENU */}
      <Box display={{ base: "block", md: "none" }} px={4} mb={6}>
        <MobileMenu />
      </Box>

      <Grid templateColumns={["1fr", "300px 1fr"]} gap={10} maxW="1200px" mx="auto" p={10}>
        {/* SIDEBAR — hidden on mobile */}
        <Box
          display={{ base: "block", md: "block" }}
          position={{ base: "static", md: "sticky" }}
          top={{ base: "0", md: "4rem" }}
          h="fit-content"
        >
          <Sidebar />
        </Box>

        {/* MAIN CONTENT */}
        <Box display="flex" flexDirection="column" gap={12}>
          <About />
          <Experiences />
          <Projects />
          <CaseStudies />
        </Box>
      </Grid>
    </Box>
  );
};

export default App;
