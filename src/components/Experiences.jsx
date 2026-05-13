import { Box, Heading, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";
import { experience } from "../data/experience";

const ExperienceTabs = () => {
  return (
    <Box id="experience">
      <Heading size="md" mb={6} color="accent">
        Experience
      </Heading>

      <Tabs variant="enclosed">
        <TabList>
          {experience.map((job, i) => (
            <Tab
              key={i}
              fontWeight="500"
              color="muted"
              _selected={{
                color: "highlight",
                bg: "surface",
                borderColor: "accent",
              }}
            >
              {job.company}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {experience.map((job, i) => (
            <TabPanel key={i}>
              <Heading size="md" color="subtleText">
                {job.role}
              </Heading>

              <Text color="subtleText" mt={1} mb={4}>
                {job.date}
              </Text>

              {job.jobDescription.map((b, idx) => (
                <Flex key={idx} mb={2} align="flex-start" gap={2}>
                  <Text color="accent" mt="2px">
                    ▹
                  </Text>
                  <Text color="muted">{b}</Text>
                </Flex>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ExperienceTabs;
