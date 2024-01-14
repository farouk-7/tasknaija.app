import { Box, Flex, Image, Text } from "@chakra-ui/react";
import commit from "../../assets/commit.png";
import purpose from "../../assets/purpose.png";
import aboutUs from "../../assets/aboutUs.png";
import { CustomButton } from "../CustomButton";

const AboutUS = () => {
  return (
    <Box
      id="aboutUs"
      bgImage={aboutUs}
      h="680px"
      p={["30px 20px", "30px 20px", "50px 70px"]}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Box>
        <Text
          color="#6BBC3B"
          fontSize={"30px"}
          fontWeight={700}
          textAlign={["center", "center", "start"]}
        >
          WHO WE ARE
        </Text>
        <Text
          color={"#fff"}
          textAlign={["center", "center", "start"]}
          py={["15px", "15px", "30px"]}
          fontSize={"30px"}
          fontWeight={300}
        >
          Empowering Lives, Enabling Dreams
        </Text>
        <Text
          color={"#fff"}
          maxW={"500px"}
          fontSize={["16px","16px","18px"]}
          textAlign={["center", "center", "start"]}
          pb={["20px","20px","50px"]}
        >
          At TASKNAIJA, we empower lives through seamless access to essential
          services, simplifying your daily needs. Join us in making every tasks
          extraordinary!
        </Text>
        <Flex
         flexDir={["column","column","row"]}
          alignItems={"center"}
          justifyContent={["center","center","flex-start"]}
          gap={["40px","40px","50px"]}
          pb={["30px","30px","50px"]}
        >
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>
              <Image src={purpose} />
            </Box>
            <Box color={"#fff"}>
              <Text fontWeight={700} fontSize={"20px"}>
                Our Purpose
              </Text>
              <Text maxW={"300px"} fontSize={"16px"}>
                Empower lives with seamless access to essential services. Join
                our transformative journey
              </Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>
              <Image src={commit} />
            </Box>
            <Box color={"#fff"}>
              <Text fontWeight={700} fontSize={"20px"}>
                Our Commitment
              </Text>
              <Text maxW={"300px"} fontSize={"16px"}>
                Empowering lives, one service at a time. Join us in making a
                difference
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent={["center", "center", "flex-start"]}>
        <a href="/#download">
          <CustomButton btnText={"Get Started"} bg={"#6BBC3B"} />
        </a>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUS;
