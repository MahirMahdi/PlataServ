import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Box,
  Avatar,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import { extendTheme } from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi/index";
import { IoFastFoodOutline, IoLogOutOutline } from "react-icons/io5/index";
import { RiFileListLine } from "react-icons/ri/index";
import { AiOutlineInfoCircle } from "react-icons/ai/index";
import { BsCashCoin } from "react-icons/bs";
import { GiCoins } from "react-icons/gi";
import { MdOutlineSpaceDashboard, MdOutlineInventory } from "react-icons/md";
import Logo from "../Shared/Logo";

export default function Sidebar() {
  return (
    <Box display={{ base: "none", lg: "block" }}>
      <SidebarBody />
    </Box>
  );
}

export function MobileSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box
        display={{ base: "grid", lg: "none" }}
        w="1.75rem"
        h="1.75rem"
        backgroundColor="black"
        m="20px 0"
        borderRadius="3px"
        _hover={{ backgroundColor: "gray" }}
        zIndex={1}
        onClick={onOpen}
        placeItems="center"
        cursor="pointer"
      >
        <MenuIcon />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        variant="secondary"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={1} />
          <DrawerBody>
            <SidebarBody />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const theme = extendTheme({
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          secondary: {
            dialog: {
              maxW: "220px",
            },
          },
        },
      },
    },
  },
});

function SidebarBody() {
  const role = window.sessionStorage.getItem("role");
  return (
    <Box
      position="fixed"
      w={{ base: "100%", lg: "15vw" }}
      h="100vh"
      bgColor="white"
      borderRightRadius=".75rem"
      boxShadow="md"
      left={0}
    >
      <Box
        w="100%"
        height="10vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        columnGap="1rem"
      >
        <Logo />
      </Box>
      <Divider orientation="horizontal" />
      <Box
        height="15vh"
        w="100%"
        display="flex"
        padding={{ base: "0 1.25rem", lg: "0 .75rem", xl: "0 1rem" }}
        alignItems="center"
        justifyContent="flex-start"
        columnGap="1rem"
      >
        {role === "cashier" ? (
          <UserCard user={user_data.cashier} />
        ) : (
          <UserCard user={user_data.manager} />
        )}
      </Box>
      <Divider orientation="horizontal" />
      <Box
        height="50vh"
        color="#323130"
        padding="1rem .25rem"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        w="100%"
      >
        {sidebar_data
          .filter((data) => data.user_type === role)
          .map((data) =>
            data.items.map((item, i) => (
              <SidebarItem
                key={i}
                route={item.route}
                icon={item.icon}
                item={item.item}
              />
            ))
          )}
      </Box>
      <Divider orientation="horizontal" />
      <Box
        height="15vh"
        padding="1rem .25rem"
        color="#323130"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        w="100%"
      >
        {sidebar_data
          .filter((data) => data.user_type === "all")
          .map((data) =>
            data.items.map((item, i) => (
              <SidebarItem
                key={i}
                route={item.route}
                icon={item.icon}
                item={item.item}
              />
            ))
          )}
      </Box>
    </Box>
  );
}

function SidebarItem({ route, icon, item }) {
  const hoverStyle = {
    textDecoration: "none",
    color: "white",
    bgColor: "#323130",
    transition: ".3s",
  };
  return (
    <Link
      href={route}
      borderRadius=".5rem"
      w="100%"
      _hover={hoverStyle}
      id={window.location.pathname === route ? `active` : ``}
    >
      <Box
        w="100%"
        padding={{ base: "1.25rem 1.25rem", sm: "1.25rem 1rem" }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        columnGap="1rem"
      >
        {icon}
        <Text
          fontSize="md"
          fontFamily="'Poppins', sans-serif"
          fontWeight="light"
        >
          {item}
        </Text>
      </Box>
    </Link>
  );
}

const sidebar_data = [
  {
    user_type: "cashier",
    items: [
      {
        item: "Menu",
        route: "/menu",
        icon: <IoFastFoodOutline size={24} />,
      },
      {
        item: "Orders",
        route: "/orders",
        icon: <RiFileListLine size={24} />,
      },
    ],
  },
  {
    user_type: "manager",
    items: [
      {
        item: "Dashboard",
        route: "/dashboard",
        icon: <MdOutlineSpaceDashboard size={24} />,
      },
      {
        item: "Inventory",
        route: "/inventory",
        icon: <MdOutlineInventory size={24} />,
      },
      {
        item: "Finance",
        route: "/finance",
        icon: <BsCashCoin size={24} />,
      },
      {
        item: "Sales",
        route: "/sales",
        icon: <GiCoins size={24} />,
      },
    ],
  },
  {
    user_type: "all",
    items: [
      {
        item: "Help & Support",
        route: "/help-support",
        icon: <AiOutlineInfoCircle size={24} />,
      },
      {
        item: "Logout",
        route: "/",
        icon: <IoLogOutOutline size={24} />,
      },
    ],
  },
];

const user_data = {
  manager: {
    name: "Olivia Johnson",
    image: "olivia.jpg",
    role: "Manager",
  },
  cashier: {
    name: "Michael Davis",
    image: "davis.jpg",
    role: "Cashier",
  },
};

function MenuIcon() {
  return <Icon color="white" w="1.25rem" h="1.25rem" as={HiOutlineMenuAlt2} />;
}

function UserCard({ user }) {
  const { name, image, role } = user;
  return (
    <>
      <Avatar src={`${import.meta.env.VITE_CDN_URL}/${image}`} />
      <Box>
        <Text
          fontSize="lg"
          fontFamily="'Poppins', sans-serif"
          color="blackAlpha.700"
        >
          {name}
        </Text>
        <Text
          fontSize="xs"
          fontFamily="'Poppins', sans-serif"
          color="blackAlpha.500"
        >
          {role}
        </Text>
      </Box>
    </>
  );
}
