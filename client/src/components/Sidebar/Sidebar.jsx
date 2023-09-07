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
import useAuth from "../../hooks/useAuth";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

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
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.get("/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      return error;
    }
  };

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
        <UserCard user={user?.user} />
      </Box>
      <Divider orientation="horizontal" />
      <Box
        height="fit-content"
        color="#323130"
        padding="1rem .25rem"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        w="100%"
      >
        {sidebar_data
          .filter((data) => data.user_type === user?.user?.role[0])
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
        height="fit-content"
        padding="1rem .25rem"
        color="#323130"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        w="100%"
      >
        <SidebarItem
          route="/help-support"
          icon={<AiOutlineInfoCircle size={24} />}
          item="Help & Support"
          testid="test-help-support"
        />
        <Box
          w="100%"
          padding={{ base: "1.25rem 1.25rem", sm: "1.25rem 1rem" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          columnGap="1rem"
          borderRadius=".5rem"
          _hover={{
            textDecoration: "none",
            color: "white",
            bgColor: "#323130",
            transition: ".3s",
          }}
          cursor="pointer"
          data-testid="test-logout"
          onClick={handleLogout}
        >
          <IoLogOutOutline size={24} />
          <Text
            fontSize="md"
            fontFamily="'Poppins', sans-serif"
            fontWeight="light"
          >
            Logout
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function SidebarItem({ route, icon, item, testid }) {
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
        data-testid={testid}
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
    user_type: "Cashier",
    items: [
      {
        item: "Menu",
        route: "/menu",
        icon: <IoFastFoodOutline size={24} />,
        testid: "test-menu",
      },
      {
        item: "Orders",
        route: "/orders",
        icon: <RiFileListLine size={24} />,
        testid: "test-orders",
      },
    ],
  },
  {
    user_type: "Manager",
    items: [
      {
        item: "Dashboard",
        route: "/dashboard",
        icon: <MdOutlineSpaceDashboard size={24} />,
        testid: "test-dashboard",
      },
      {
        item: "Inventory",
        route: "/inventory",
        icon: <MdOutlineInventory size={24} />,
        testid: "test-inventory",
      },
      {
        item: "Finance",
        route: "/finance",
        icon: <BsCashCoin size={24} />,
        testid: "test-finance",
      },
      {
        item: "Sales",
        route: "/sales",
        icon: <GiCoins size={24} />,
        testid: "test-sales",
      },
    ],
  },
];

function MenuIcon() {
  return <Icon color="white" w="1.25rem" h="1.25rem" as={HiOutlineMenuAlt2} />;
}

function UserCard({ user }) {
  const { username, role } = user;
  return (
    <>
      <Avatar name={username} />
      <Box>
        <Text
          fontSize="lg"
          fontFamily="'Poppins', sans-serif"
          color="blackAlpha.700"
        >
          {username}
        </Text>
        <Text
          fontSize="xs"
          fontFamily="'Poppins', sans-serif"
          color="blackAlpha.500"
        >
          {role[0]}
        </Text>
      </Box>
    </>
  );
}
