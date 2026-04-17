import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { experience } from "../../data/experience";
import { useEffect, useRef, useState } from "react";

const ExperienceTabs = () => {
  const tabRefs = useRef([]);
  const [highlightY, setHighlightY] = useState(0);
  const [highlightH, setHighlightH] = useState(0);

  const handleTabChange = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setHighlightY(tab.offsetTop);
      setHighlightH(tab.offsetHeight);
    }
  };

  useEffect(() => {
    const first = tabRefs.current[0];
    if (first) {
      setHighlightY(first.offsetTop);
      setHighlightH(first.offsetHeight);
    }
  }, []);

  return (
    <Box id="experience">
      <Heading size="md" mb={6} color="accent">
        Experience
      </Heading>

      <Tabs orientation="vertical" variant="unstyled" onChange={handleTabChange}>
        <Box position="relative">
          <Box
            position="absolute"
            right="-2px"
            width="3px"
            bg="accent"
            borderRadius="full"
            transition="transform 0.25s ease"
            transform={`translateY(${highlightY}px)`}
            height={`${highlightH}px`}
            boxShadow="0 0 12px accent"
          />

          <TabList borderRight="1px solid" borderColor="surface" pr={4} minW="180px">
            {experience.map((job, i) => (
              <Tab
                key={i}
                ref={(el) => (tabRefs.current[i] = el)}
                color="muted"
                _selected={{ color: "highlight", fontWeight: "600" }}
                py={3}
                textAlign="left"
              >
                {job.company}
              </Tab>
            ))}
          </TabList>
        </Box>

        <TabPanels pl={6}>
          {experience.map((job, i) => (
            <TabPanel key={i}>
              <Heading size="md" color="text">
                {job.role} @ {job.company}
              </Heading>

              <Text color="muted" mt={1} mb={4}>
                {job.date}
              </Text>

              {job.bullets.map((b, idx) => (
                <Text key={idx} mb={2} color="text">
                  ▹ {b}
                </Text>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ExperienceTabs;
