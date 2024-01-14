import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { CustomButton } from "./CustomButton";

function MobileHamBugerNav({ ...props }) {
  const [show, setShow] = useState(false);

  return (
    <Box {...props}>
      <MdOutlineMenu
        cursor={"pointer"}
        onClick={() => setShow((prev) => !prev)}
        fontSize={"2em"}
        color="#fff"
      />
      {show && (
        <Box
          data-aos="fade-left"
          position="fixed"
          bottom={"0"}
          left="0"
          right="0"
          top="0"
          w="100%"
          bg={"#eee"}
          zIndex={1022}
        >
          <Flex
            flexDir={"column"}
            justifyContent="center"
            alignItems={"center"}
            color={"white"}
            fontWeight="600"
            w="100%"
            p="20px"
          >
            <FaTimes
              style={{ alignSelf: "flex-end" }}
              fontSize="1.5em"
              cursor={"pointer"}
              onClick={() => setShow(false)}
              color="black"
            />
            <Flex
              gap="50px"
              flexDir={"column"}
              alignItems="center"
              justifyContent="center"
              fontSize={"1.5em"}
              color={"black"}
            >
              <a href="/#home" onClick={() => setShow(false)}>
                <Text>Home</Text>
              </a>

              <a href="/#feature" onClick={() => setShow(false)}>
                <Text>Services</Text>
              </a>
              <a href="/#howItWorks" onClick={() => setShow(false)}>
                <Text>How It Works</Text>
              </a>
              <a href="/#faqs" onClick={() => setShow(false)}>
                <Text>FAQs</Text>
              </a>
              <a href="/#aboutUs" onClick={() => setShow(false)}>
                <Text>About Us</Text>
              </a>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} mt="50px">
            <a href="/#download" onClick={() => setShow(false)} >
              <CustomButton btnText={"Get Started"} px="35px" />
            </a>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default MobileHamBugerNav;
