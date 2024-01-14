import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import FormInput from "../FormInput";
import { useState } from "react";
import { CustomButton } from "../CustomButton";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Contact = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
      const [resize, setResize] = useState("none");
  return (
    <Box p={["30px 20px", "30px 20px", "50px 70px"]} bg={"#eee"}>
      <Flex
        gap={["50px", "50px", "150px"]}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flexDir={["column", "column", "row"]}
      >
        <Box 
        // data-aos={"fade-left"}
        >
          <Text fontSize={["25px"]} fontWeight={"bold"}>
            Get in touch today
          </Text>
          <Text
            maxW={"600px"}
            my={["10px", "10px", "20px"]}
            fontSize={["16px", "16px", "18px"]}
          >
            Reach Out Today To Discover How We Can Elevate Your Experience and
            Achieve Success Together.
          </Text>
          <Box
            p={["20px 10px", "20px 10px", "40px 30px"]}
            borderRadius={"10px"}
            bg="#6BBC3B"
          >
            <Flex
              justifyContent={"space-between"}
              gap={["10px", "10px", "0"]}
              color={"white"}
            >
              <FormInput
                label={"Name"}
                type="text"
                name="name"
                bg="white"
                color="black"
                placeholder={"Enter your Name"}
              />
              <FormInput
                label={"Email"}
                type="email"
                name="email"
                bg="white"
                placeholder={"Enter your Email Address"}
              />
            </Flex>
            <Flex
              gap={["10px", "10px", "0"]}
              justifyContent={"space-between"}
              color={"white"}
              my="20px"
            >
              <FormInput
                label={"Phone"}
                type="number"
                name="phone"
                bg="white"
                color="black"
                placeholder={"Enter your Phone"}
              />
              <FormInput
                label={"Company"}
                type="text"
                name="company"
                bg="white"
                placeholder={"Enter your Company"}
              />
            </Flex>
            <Flex flexDir={"column"} mb="20px">
              <Text color={"#fff"} fontWeight={"bold"} pb="5px">
                Message
              </Text>
              <Textarea
                bg={"white"}
                type="text"
                name="message"
                resize={resize}
                h="100px"
                placeholder="Enter your message"
              />
            </Flex>
            <CustomButton btnText={"send message"} />
          </Box>
        </Box>
        <Box 
        // data-aos={"fade-right"}
        >
          <Text fontSize={"25px"} fontWeight={"bold"}>
            Contact details
          </Text>
          <Box my={["20px", "20px", "50px"]}>
            <Text>Our location</Text>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              58 Middle Point Rd Lekki Ajah, 94124
            </Text>
          </Box>
          <Box>
            <Text>Call us</Text>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              (234) 456-789
            </Text>
          </Box>
          <Box my={["20px", "20px", "50px"]}>
            <Text>Email us</Text>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              contact@company.com
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
