import { Flex, Img, Text } from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";

const Navigation = () => {
  return (
    <Flex
      bg="#6BBC3B"
      position={"fixed"}
      zIndex={1003}
      alignItems={"center"}
      width={"100%"}
      justifyContent="space-between"
      fontWeight="500"
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      gap={["20px", "20px", "20px", "unset"]}
      py="10px"
      px={["20px", "20px", "20px", "70px"]}
    >
      <a href="/#home">
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" src={logo1} alt="logo" w={["60%", "60%"]} />
        </Flex>
      </a>

      <MobileHamBugerNav display={["block", "block", "block", "none"]} />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["20px", "50px"]}
          color={"#fff"}
        >
          <a href="/#home" id="rrr">
            <Text>Home</Text>
          </a>
          <a href="/#feature" id="rrr">
            <Text>Services</Text>
          </a>
          <a href="/#howItWorks" id="rrr">
            <Text>How It Works</Text>
          </a>
          <a href="/#faqs" id="rrr">
            <Text>FAQs</Text>
          </a>
          <a href="/#aboutUs" id="rrr">
            <Text>About Us</Text>
          </a>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap="50px"
        >
          <a href="/#download">
            <CustomButton btnText={"Get Started"} />
          </a>
        </Flex>
      </>
    </Flex>
  );
};

export default Navigation;
