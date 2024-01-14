import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import facebook from "../assets/socials/Facebook.png"
import twitter from "../assets/socials/Twitter.png";
import instagram from "../assets/socials/Instagram.png";
import linkedIn from "../assets/socials/LinkedIn.png";
import youtube from "../assets/socials/YouTube.png";


const Footer = () => {
  return (
    <Box
      p={["30px 20px", "30px 20px", "50px 70px"]}
      h={["fit-content", "fit-content", "450px"]}
      bg={"#1034A6"}
    >
      <Flex color="#fff" justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box textAlign={"center"}>
          <Text>Product</Text>
          <Box fontSize={"14px"} my={["10px", "10px", "20px"]}>
            <Text pb={["5px", "5px", "10px"]}>Features</Text>
            <Text pb={["5px", "5px", "10px"]}>Pricing</Text>
            <Text pb={["5px", "5px", "10px"]}>Case studies</Text>
            <Text pb={["5px", "5px", "10px"]}>Reviews</Text>
            <Text pb={["5px", "5px", "10px"]}>Updates</Text>
          </Box>
        </Box>
        <Box textAlign={"center"}>
          <Text>Company</Text>
          <Box fontSize={"14px"} my={["10px", "10px", "20px"]}>
            <Text pb={["5px", "5px", "10px"]}>About</Text>
            <Text pb={["5px", "5px", "10px"]}>Contact</Text>
            <Text pb={["5px", "5px", "10px"]}>Careers</Text>
            <Text pb={["5px", "5px", "10px"]}>Culture</Text>
            <Text pb={["5px", "5px", "10px"]}>Blog</Text>
          </Box>
        </Box>
        <Box textAlign={"center"}>
          <Text>Support</Text>
          <Box fontSize={"14px"} my={["10px", "10px", "20px"]}>
            <Text pb={["5px", "5px", "10px"]}>Getting started</Text>
            <Text pb={["5px", "5px", "10px"]}>Help center</Text>
            <Text pb={["5px", "5px", "10px"]}>Server status</Text>
            <Text pb={["5px", "5px", "10px"]}>Report a bug</Text>
            <Text pb={["5px", "5px", "10px"]}>Chat support</Text>
          </Box>
        </Box>
        <Box textAlign={"center"}>
          <Text>Download</Text>
          <Box fontSize={"14px"} my={["10px", "10px", "20px"]}>
            <Text pb={["5px", "5px", "10px"]}>iOS</Text>
            <Text pb={["5px", "5px", "10px"]}>Android</Text>
            <Text pb={["5px", "5px", "10px"]}>Mac</Text>
            <Text pb={["5px", "5px", "10px"]}>Windows</Text>
            <Text pb={["5px", "5px", "10px"]}>Chrome</Text>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent={"center"}>
        <HStack spacing={["10px","10px","15px"]}>
          <Image src={facebook} />
          <Image src={twitter} />
          <Image src={instagram} />
          <Image src={linkedIn} />
          <Image src={youtube} />
        </HStack>
      </Flex>
      <Box textAlign={"center"} color={"#fff"} fontSize={"14px"}>
        <Text py={["15px","15px","30px"]}>
          All Right Reserved | Terms and Conditions | Privacy Policy
        </Text>
        <Text>Copyright © 2023 TASKNAIJA</Text>
      </Box>
    </Box>
  );
}

export default Footer