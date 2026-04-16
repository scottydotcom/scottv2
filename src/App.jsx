import { Grid, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import ExperienceTabs from "./components/Experience/ExperienceTabs";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <Grid
      templateColumns={["1fr", "300px 1fr"]}
      gap={10}
      maxW="1200px"
      mx="auto"
      p={10}
    >
      <Box position="sticky" top="4rem" h="fit-content">
        <Sidebar />
      </Box>


      <Box display="flex" flexDirection="column" gap={12}>
        <About />
        <ExperienceTabs />
        <Projects />
      </Box>
    </Grid>
  );
}