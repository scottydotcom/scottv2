import { VStack, Link } from "@chakra-ui/react";

const navItems = [
  { label: "ABOUT", href: "#" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CASE STUDIES", href: "#case-studies" },
];

const SidebarNav = () => {
  return (
    <VStack align="start" spacing={2} mt={6}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          color="accent"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: "0",
            width: "0%",
            height: "1px",
            backgroundColor: "highlight",
            transition: "width 0.25s ease",
          }}
          _hover={{
            _after: { width: "100%" },
          }}
        >
          {item.label}
        </Link>
      ))}
    </VStack>
  );
};

export default SidebarNav;