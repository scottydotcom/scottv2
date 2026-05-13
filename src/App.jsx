// import { Grid, Box } from "@chakra-ui/react";
// import Sidebar from "./components/Sidebar";
// import About from "./components/About";
// import Experiences from "./components/Experiences";
// import Projects from "./components/Projects";
// import CaseStudies from "./components/CaseStudies";

// const App = () => {
//   return (
//     <Grid
//       templateColumns={["1fr", "300px 1fr"]}
//       gap={10}
//       maxW="1200px"
//       mx="auto"
//       p={10}
//     >
//       <Box position="sticky" top="4rem" h="fit-content">
//         <Sidebar />
//       </Box>
//       <Box display="flex" flexDirection="column" gap={12}>
//         <About />
//         <Experiences />
//         <Projects />
//         <CaseStudies />
//       </Box>
//     </Grid>
//   );
// };

// export default App;

import { Grid, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";

const App = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "300px 1fr" }}
      gap={{ base: 6, md: 10 }}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 10 }}
      py={{ base: 6, md: 10 }}
    >
      <Box position={{ base: "static", md: "sticky" }} top="4rem" h="fit-content">
        <Sidebar />
      </Box>

      <Box display="flex" flexDirection="column" gap={{ base: 10, md: 12 }}>
        <About />
        <Experiences />
        <Projects />
        <CaseStudies />
      </Box>
    </Grid>
  );
};

export default App;
