import { Grid, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  return (
    <>
      {/* MOBILE BURGER MENU */}
      <Box display={{ base: "block", md: "none" }} p={4}>
        <MobileMenu />
      </Box>

      <Grid
        templateColumns={["1fr", "300px 1fr"]}
        gap={10}
        maxW="1200px"
        mx="auto"
        p={10}
      >
        {/* SIDEBAR — hidden on mobile, visible on desktop */}
        <Box
          display={{ base: "none", md: "block" }}
          position={{ base: "static", md: "sticky" }}
          top={{ base: "0", md: "4rem" }}
          h="fit-content"
        >
          <Sidebar />
        </Box>

        <Box display="flex" flexDirection="column" gap={12}>
          <About />
          <Experiences />
          <Projects />
          <CaseStudies />
        </Box>
      </Grid>
    </>
  );
};

export default App;
