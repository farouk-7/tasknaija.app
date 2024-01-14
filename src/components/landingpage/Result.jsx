import { Box, Flex, Text, Divider } from "@chakra-ui/react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Result = () => {
  //  useEffect(() => {
  //    Aos.init({ duration: 2000 });
  //  }, []);
  return (
    <Box p={["30px 20px", "30px 20px", "50px 70px"]}>
      <Box my="10px"
      //  data-aos="zoom-out"
       >
        <Text
          textAlign={"center"}
          fontSize={"30px"}
          fontWeight={"bold"}
          color={"#1034A6"}
        >
          Our results in numbers
        </Text>
        <Text
          margin={"0px auto"}
          fontSize={["16px", "16px", "18px"]}
          textAlign={"center"}
          maxW={"450px"}
          py={["5px", "5px", "10px"]}
        >
          Explore Our Achievements and Impact Expressed Through the Numbers,
          Unveiling a Tapestry of Success
        </Text>
      </Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={["50px","50px","100px"]}
        // data-aos="zoom-in"
        flexWrap={"wrap"}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"30px"} fontWeight={"bold"} color={"#1034A6"}>
            99%
          </Text>
          <Text color={"#1034A6"}>Customer satisfaction</Text>
        </Box>
        <Divider
          orientation="vertical"
          height={"60px"}
          display={["none", "none", "block"]}
        />
        <Box textAlign={"center"}>
          <Text fontSize={"30px"} fontWeight={"bold"} color="#1034A6">
            32M
          </Text>
          <Text color="#1034A6">Active users</Text>
        </Box>
        <Divider
          orientation="vertical"
          height={"60px"}
          color="#1034A6"
          display={["none", "none", "block"]}
        />
        <Box textAlign={"center"}>
          <Text fontSize={"30px"} fontWeight={"bold"} color="#1034A6">
            125+
          </Text>
          <Text color="#1034A6">Team members</Text>
        </Box>
        <Divider
          orientation="vertical"
          height={"60px"}
          color="#1034A6"
          display={["none", "none", "block"]}
        />
        <Box textAlign={"center"}>
          <Text fontSize={"30px"} fontWeight={"bold"} color="#1034A6">
            240%
          </Text>
          <Text color="#1034A6">Company growth</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Result;
