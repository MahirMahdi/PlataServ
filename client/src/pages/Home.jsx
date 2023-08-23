import {
  Box,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import Logo from "../components/Shared/Logo";
import { FaBolt, FaGripfire } from "react-icons/fa";
import {
  GiWoodPile,
  GiCakeSlice,
  GiMushroomHouse,
  GiCookingPot,
  GiStack,
} from "react-icons/gi";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { MdOutlinePointOfSale, MdTrackChanges } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeatureCard from "../components/Home/FeatureCard";
import BannerListItem from "../components/Home/BannerListItem";
import FooterContentList from "../components/Home/FooterContentList";
import { LandingPageButton } from "../components/Shared/Buttons";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const auth = (role) => {
    window.sessionStorage.setItem("role", role);
  };

  return (
    <Box w="100vw" id="top">
      <Box w="100%" as="header">
        <Box
          as="nav"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding={{
            base: "1.5rem 0rem",
            sm: "1.5rem .5rem",
            xl: "1.5rem 2rem",
          }}
          paddingRight={{ base: "1rem", sm: "1.5rem", xl: "3.5rem" }}
        >
          <Logo />
          <LandingPageButton
            name="Login"
            type="primary"
            section={null}
            testid="login-button"
            navigate={() => navigate("/login")}
          />
        </Box>
      </Box>
      <Box as="main">
        <Box
          w={{ base: "90vw", sm: "80vw", md: "75vw", lg: "60vw", xl: "45vw" }}
          display="grid"
          placeItems="center"
          rowGap="1.5rem"
          textAlign="center"
          m={{
            base: "2.5rem 5vw",
            sm: "2.5rem 10vw",
            md: "2.5rem 12.5vw",
            lg: "2.5rem 20vw",
            xl: "2.5rem 27.5vw",
          }}
        >
          <Tag borderRadius="full" bgColor="#dff4ce" size="sm" padding=".5rem">
            <TagLeftIcon as={FaBolt} />
            <TagLabel>CREATE FOR EFFICIENCY</TagLabel>
          </Tag>
          <Heading
            size={{ base: "lg", md: "xl" }}
            fontFamily='"Cabin", sans-serif'
            data-testid="landing-page-header"
          >
            Streamline Your Restaurant With <br /> Our Management System
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            fontFamily='"Inter", sans-serif'
          >
            We Simplify Your Restaurant Operations,
            <br /> Letting You Do What You Do Best!
          </Text>

          <LandingPageButton
            name="View Demo"
            type="primary"
            section="#features"
            testid="demo-button"
          />
          <img
            fetchpriority="high"
            src={`${
              import.meta.env.VITE_CDN_URL
            }/tr:ar-2-1,w-0.3/hero-image.png`}
            alt="hero-image"
            width="640"
            height="480"
            style={{ borderRadius: "5px", border: "1px solid #e8e8e8" }}
          />
        </Box>
        <Box
          h="fit-content"
          w="100%"
          bgColor="#EDF2F6"
          m="100px 0"
          display="grid"
          placeItems="center"
        >
          <Box
            w={{ base: "90vw", sm: "80vw", md: "75vw", lg: "60vw", xl: "45vw" }}
            textAlign="center"
            m={{
              base: "2.5rem 5vw",
              sm: "2.5rem 10vw",
              md: "2.5rem 12.5vw",
              lg: "2.5rem 20vw",
              xl: "2.5rem 27.5vw",
            }}
            display="grid"
            rowGap="1.5rem"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontFamily='"Cabin", sans-serif'
            >
              Trusted by the fastest growing restaurants
            </Heading>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              columnGap=".75rem"
              rowGap="1rem"
            >
              {banner_list.map((item, i) => (
                <BannerListItem key={i} item={item} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: "90vw", sm: "80vw", md: "75vw", lg: "85vw", xl: "80vw" }}
          display="grid"
          placeItems="center"
          rowGap="5rem"
          textAlign="center"
          m={{
            base: "1.5rem 5vw",
            sm: "1.5rem 10vw",
            md: "1.5rem 12.5vw",
            lg: "2.5rem 7.5vw",
            xl: "2.5rem 10vw",
          }}
          id="features"
        >
          {feature_list.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              authFunction={auth}
              align={i === 1 && "reverse"}
              buttonIcon={<IoIosArrowRoundForward size={24} />}
              featureTestId={feature.featureTestId}
              linkTestId={feature.linkTestId}
            />
          ))}
        </Box>
        <Box
          h="fit-content"
          w="100%"
          bgColor="#323130"
          m="100px 0"
          display="grid"
          placeItems="center"
        >
          <Box
            w={{ base: "90vw", sm: "80vw", md: "75vw", lg: "60vw", xl: "45vw" }}
            textAlign="center"
            m={{
              base: "2.5rem 5vw",
              sm: "2.5rem 10vw",
              md: "2.5rem 12.5vw",
              lg: "2.5rem 20vw",
              xl: "2.5rem 27.5vw",
            }}
            display="grid"
            placeItems="center"
            rowGap="1.5rem"
            color="white"
          >
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily='"Cabin", sans-serif'
            >
              Let Us Handle The Heavy Lifting For You
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily='"Inter", sans-serif'
            >
              Join <strong>1000+</strong> Restaurants
            </Text>
            <LandingPageButton
              name="Get Started"
              type="secondary"
              section={null}
              testid="login-button"
              navigate={() => navigate("/login")}
            />
          </Box>
        </Box>
      </Box>
      <Box
        as="footer"
        borderTop="1px solid #e8e8e8"
        w="100%"
        padding="2rem"
        display="flex"
        justifyContent="space-between"
        rowGap="2rem"
        flexWrap="wrap"
      >
        {footer_content_list.map((content, i) => (
          <FooterContentList key={i} content={content} />
        ))}
        <Box
          display={{ base: "flex", sm: "grid" }}
          rowGap=".5rem"
          placeItems="center"
          alignItems="center"
          justifyContent="space-around"
          flexBasis={{ base: "100%", sm: "25%" }}
        >
          <BsLinkedin size={20} />
          <BsFacebook size={20} />
          <BsTwitter size={20} />
          <BsInstagram size={20} />
          <BsGithub size={20} />
        </Box>
      </Box>
    </Box>
  );
}

const banner_list = [
  {
    name: "Wildflower",
    icon: <FaGripfire size={20} />,
    fontFamily: '"Inter", sans-serif',
  },
  {
    name: "Oakwood Grill",
    icon: <GiWoodPile size={20} />,
    fontFamily: '"Roboto", sans-serif',
  },
  {
    name: "Epicurean",
    icon: <GiCakeSlice size={20} />,
    fontFamily: '"Cabin", sans-serif',
  },
  {
    name: "AZURE BISTRO",
    icon: <GiMushroomHouse size={20} />,
    fontFamily: '"Poppins", sans-serif',
  },
  {
    name: "Copper Pot",
    icon: <GiCookingPot size={20} />,
    fontFamily: '"Cabin", sans-serif',
  },
];

const feature_list = [
  {
    icon: <MdOutlinePointOfSale size={20} color="white" />,
    headline: "Navigate Our Stunning POS",
    tagline:
      "With our advanced POS system, you'll be able to manage orders, payments, and track speed of service with ease.",
    image: "pos.png",
    buttonName: "Explore POS",
    role: "cashier",
    featureTestId: "feature-card-pos",
    linkTestId: "pos-link",
  },
  {
    icon: <GiStack size={20} color="white" />,
    headline: "Access Financial Data Instantly",
    tagline:
      "Our financial reporting tools give you instant access to all of your restaurant's financial data, including sales reports, banking information, and more, to help you make informed decisions.",
    image: "finance.png",
    buttonName: "Try it now",
    role: "manager",
    featureTestId: "feature-card-admin",
    linkTestId: "admin-link",
  },
  {
    icon: <MdTrackChanges size={20} color="white" />,
    headline: "Track Inventory With Ease",
    tagline:
      "Our inventory tracking system lets you keep a close eye on all of your ingredients, supplies, and equipment. You'll be able to monitor usage, set reordering thresholds, and even generate shopping lists with just a few clicks.",
    image: "tracker.png",
  },
];

const footer_content_list = [
  {
    heading: "Features",
    content_list: [
      "Inventory Tracker",
      "Financial Reports",
      "PAR Builder",
      "POS System",
    ],
  },
  {
    heading: "Benefits",
    content_list: ["24/7 customer support", "Customizable Business Needs"],
  },
  {
    heading: "About Us",
    content_list: ["Blog", "Community", "Services", "Pricing"],
  },
];
