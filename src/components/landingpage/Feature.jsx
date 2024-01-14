import { Box, Flex, Image, Text } from "@chakra-ui/react";
import featImg1 from "../../assets/featImg1.png";
import featImg2 from "../../assets/featImg2.png";
import featImg3 from "../../assets/featImg3.png";
import { CustomButton } from "../CustomButton";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Feature = () => {
  //  useEffect(() => {
  //    Aos.init({ duration: 2000 });
  //  }, []);

  return (
    <Box p={["30px 20px", "30px 20px", "50px 70px"]} id="feature">
      <Box 
      // data-aos="zoom-in"
      >
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>
          Featured Services
        </Text>
        <Text
          margin={"0px auto"}
          maxW={"600px"}
          textAlign={"center"}
          py={"10px"}
        >
          Explore a diverse range of services to meet your unique needs. From
          quick repairs to beauty treatments, we connect you with skilled local
          professionals who deliver excellence at your doorstep.
        </Text>
      </Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
        mt="20px"
        flexDir={["column", "column", "row"]}
      >
        <Box position="relative" 
        // data-aos="fade-right"
        >
          <Box>
            <Image src={featImg1} borderRadius={"20px"} />
            <Box
              position="absolute"
              top={["20%", "20%", "30%", "50%"]}
              color="white"
              px={["15px", "15px", "15px", "30px"]}
            >
              <Text
                fontSize={["20px", "20px", "20px", "30px"]}
                fontWeight={"bold"}
              >
                Home Repairs
              </Text>
              <Text
                maxW="500px"
                py={["10px", "10px", "10px", "20px"]}
                fontSize={["16px", "16px", "16px", "18px"]}
              >
                Discover reliable and skilled professionals for all your home
                repair needs. From electrical fixes to carpentry solutions, our
                platform connects you with trusted experts.
              </Text>
              <a href="/#download">
                <CustomButton btnText={"Get Started"} bg={"#6BBC3B"} />
              </a>
            </Box>
          </Box>
        </Box>

        <Flex flexDir={"column"} gap={"32px"} 
        // data-aos="fade-left"
        >
          <Box position="relative">
            <Image src={featImg2} borderRadius={"20px"} minH="170px" />
            <Box
              position="absolute"
              top={["5%", "5%", "5%", "15%"]}
              color="#fff"
              px={["15px", "15px", "15px", "30px"]}
            >
              <Text
                fontSize={["20px", "20px", "20px", "30px"]}
                fontWeight={"bold"}
              >
                Pet Care
              </Text>
              <Text
                maxW="400px"
                py={["5px", "5px", "5px", "20px"]}
                fontSize={["16px", "16px", "16px", "18px"]}
              >
                Ensure the well-being of your furry friends with our
                comprehensive pet care services.
              </Text>
              <a href="/#download">
                <CustomButton btnText={"Get Started"} bg={"#6BBC3B"} />
              </a>
            </Box>
          </Box>
          <Box position="relative">
            <Image src={featImg3} borderRadius={"20px"} minH="170px" />
            <Box
              position="absolute"
              top={["5%", "5%", "5%", "15%"]}
              color="#fff"
              px={["15px", "15px", "15x", "30px"]}
            >
              <Text
                fontSize={["20px", "20px", "20px", "30px"]}
                fontWeight={"bold"}
              >
                Home Organization
              </Text>
              <Text
                maxW="400px"
                py={["5px", "5px", "5px", "20px"]}
                fontSize={["16px", "16px", "16px", "18px"]}
              >
                Transform your living space into a clutter-free haven with our
                home organization services.
              </Text>
              <a href="/#download">
                <CustomButton btnText={"Get Started"} bg={"#6BBC3B"} />
              </a>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Feature;
