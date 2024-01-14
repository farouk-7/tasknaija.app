import { Box, Flex, Text } from '@chakra-ui/react'
import { CustomButton } from '../CustomButton';
import SlickSlider from '../SlickSlider';
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";


const Testimony = () => {
  //  useEffect(() => {
  //    Aos.init({ duration: 2000 });
  //  }, []);
  return (
    <Box
      // data-aos="zoom-out"
      p={["30px 20px", "30px 20px", "50px 70px"]}
    >
      <Flex justifyContent={"space-between"} alignItems={"start"}>
        <Box>
          <Text fontSize={["20px", "20px", "30px"]} fontWeight={"bold"}>
            What our clients say
          </Text>
          <Text maxW={"300px"} py="10px" fontSize={["16px", "16px", "18px"]}>
            Client Voices: Discover Why They Love Our Exceptional Services.
          </Text>
        </Box>
        <a href="/#download">
          <CustomButton btnText={"Get Started"} />
        </a>
      </Flex>

      <Box>
        <SlickSlider />
      </Box>
    </Box>
  );
}

export default Testimony