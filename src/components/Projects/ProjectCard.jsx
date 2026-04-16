// import { Box, Flex, Heading, Text, Image, Tag, Link } from "@chakra-ui/react";
// import { FaGithubSquare } from "react-icons/fa";
// import { TbBrowserMaximize } from "react-icons/tb";

// export default function ProjectCard({ project }) {
//   return (
//     <Flex
//       p={6}
//       borderRadius="lg"
//       border="1px solid rgba(255,255,255,0.06)"
//       gap={6}
//       align="flex-start"
//       position="relative"
//       overflow="hidden"
//       transition="0.35s ease"
//       bg="surface"
//       _hover={{
//         transform: "scale(1.03)",
//         backdropFilter: "blur(18px) brightness(1.1)",
//         bg: "rgba(255,255,255,0.08)",
//         borderColor: "rgba(255,255,255,0.25)",
//         boxShadow:
//           "0 0 25px rgba(255,255,255,0.10), 0 0 60px rgba(255,255,255,0.08), 0 0 90px rgba(165,115,82,0.15)",
//       }}
//     >
//       <Image
//         src={project.imageUrl}
//         alt={project.title}
//         w="120px"
//         h="90px"
//         objectFit="cover"
//         borderRadius="md"
//       />

//       <Box flex="1">
//         <Flex justify="space-between" align="center">
//           <Heading size="md" color="text">
//             {project.title}
//           </Heading>

//           <Flex gap={3}>
//             {project.link && (
//               <Link href={project.link} target="_blank" color="accent">
//                 <FaGithubSquare size={22} />
//               </Link>
//             )}
//             {project.open && (
//               <Link href={project.open} target="_blank" color="accent">
//                 <TbBrowserMaximize size={22} />
//               </Link>
//             )}
//           </Flex>
//         </Flex>

//         <Text color="muted" mt={2}>
//           {project.description}
//         </Text>

//         <Flex gap={2} mt={3} wrap="wrap">
//           {project.tags.map((tag, i) => (
//             <Tag key={i} bg="olive.700" color="olive.100">
//               {tag}
//             </Tag>
//           ))}
//         </Flex>
//       </Box>
//     </Flex>
//   );
// }
