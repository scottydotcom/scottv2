import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { label: "ABOUT", href: "#" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CASE STUDIES", href: "#case-studies" },
  ];

  return (
    <Box display={{ base: "block", md: "none" }}>
      <IconButton icon={<HamburgerIcon />} onClick={onOpen} variant="ghost" color="accent" fontSize="24px" />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="bg" color="text">
          <DrawerCloseButton />
          <DrawerHeader color="accent">Navigation</DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} color="highlight" fontSize="lg" onClick={onClose}>
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
