import { Box, Heading, Flex, Text, Image, Tag, Link, SimpleGrid } from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";
import { projects, miniProjects } from "../data/projects";

const Projects = () => {
  return (
    <Box id="projects">
      <Heading size="md" mb={6} color="accent">
        Projects
      </Heading>

      {/* MAIN PROJECTS — UNCHANGED */}
      <Flex direction="column" gap={6} mb={7}>
        {projects.map((project, i) => (
          <Flex
            key={i}
            p={6}
            borderRadius="lg"
            border="1px solid rgba(255,255,255,0.06)"
            gap={6}
            align="flex-start"
            position="relative"
            overflow="hidden"
            transition="0.35s ease"
            bg="surface"
            backdropFilter="blur(18px)"
            _hover={{
              transform: "scale(1.03)",
              backdropFilter: "blur(18px) brightness(1.1)",
              bg: "rgba(255,255,255,0.05)",
            }}
          >
            <Image src={project.imageUrl} alt={project.title} w="120px" h="90px" objectFit="cover" borderRadius="md" />

            <Box flex="1">
              <Flex justify="space-between" align="center">
                <Heading size="md" color="subtleText">
                  {project.title}
                </Heading>

                <Flex gap={3}>
                  {project.github && (
                    <Link href={project.github} target="_blank" color="accent">
                      <FaGithubSquare size={22} />
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" color="accent">
                      <TbBrowserMaximize size={22} />
                    </Link>
                  )}
                </Flex>
              </Flex>

              <Text color="muted" mt={2}>
                {project.description}
              </Text>

              <Flex gap={2} mt={3} wrap="wrap">
                {project.tags.map((tag, idx) => (
                  <Tag key={idx} bg="olive.700" color="olive.100">
                    {tag}
                  </Tag>
                ))}
              </Flex>
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* MINI PROJECTS — SAME STYLING, 3-COLUMN GRID */}
      {/* <Heading size="sm" mb={4} color="accent">
        Smaller Projects
      </Heading> */}

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {miniProjects.map((project, i) => (
          <Flex
            key={i}
            p={6}
            borderRadius="lg"
            border="1px solid rgba(255,255,255,0.06)"
            gap={6}
            align="flex-start"
            position="relative"
            overflow="hidden"
            transition="0.35s ease"
            bg="surface"
            _hover={{
              transform: "scale(1.03)",
              backdropFilter: "blur(18px) brightness(1.1)",
              bg: "rgba(255,255,255,0.05)",
            }}
          >
            {/* Mini cards can use a smaller image or icon */}

            <Box flex="1">
              <Flex justify="space-between" align="center">
                <Heading size="sm" color="subtleText">
                  {project.title}
                </Heading>

                <Flex gap={3}>
                  {project.github && (
                    <Link href={project.github} target="_blank" color="accent">
                      <FaGithubSquare size={20} />
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" color="accent">
                      <TbBrowserMaximize size={20} />
                    </Link>
                  )}
                </Flex>
              </Flex>

              <Text color="muted" mt={2}>
                {project.description}
              </Text>

              <Flex gap={2} mt={3} wrap="wrap">
                {project.tags.map((tag, idx) => (
                  <Tag key={idx} bg="olive.700" color="olive.100">
                    {tag}
                  </Tag>
                ))}
              </Flex>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;


{/* <Flex align="center" mb={6}>
  <Heading size="md" color="accent">
    Projects
  </Heading>

  <Divider
    ml={4}
    mt={1}
    flex="1"
    borderColor="highlight" // or your theme token
  />
</Flex> */}