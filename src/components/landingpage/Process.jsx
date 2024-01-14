import { Box, Flex, Image, Text } from "@chakra-ui/react";
import processBg from "../../assets/processBg.png";
import Vector1 from "../../assets/Vector1.png"
import Vector2 from "../../assets/Vector2.png"
import Vector3 from "../../assets/Vector3.png"
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Process = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <Box
      id="howItWorks"
      bgImage={processBg}
      height={["fit-content","fit-content","650px"]}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      textAlign={"center"}
      p={["30px 20px", "30px 20px", "50px 70px"]}
    >
      <Box color={"#fff"} 
      // data-aos="zoom-out"
      >
        <Text pb={["20px", "20px", "30px"]}>Our process</Text>
        <Text fontSize={["20px", "20px", "30px"]} fontWeight={700}>
          Get started as easy as 1,2,3
        </Text>
        <Text
          py="10px"
          maxW="500px"
          margin="0px auto"
          fontSize={["16px", "16px", "18px"]}
        >
          Embark on a hassle-free journey with TASKNAIJA. Our intuitive process
          ensures a seamless experience from start to finish.
        </Text>
      </Box>
      <Flex
        justifyContent="center"
        flexDir={["column", "column", "row"]}
        gap={["20px", "20px", "100px"]}
        color={"#fff"}
        mt={["10px", "10px", "40px"]}
        // data-aos="fade-left"
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Image src={Vector1} boxSize={["100px", "100px", "150px"]} />
          <Text py={["5px", "5px", "10px"]}>Download our free app</Text>
          <Text maxW={["300px"]} fontSize={["16px", "16px", "18px"]}>
            Unlock seamless convenience with our app—access local services
            effortlessly
          </Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Image src={Vector2} boxSize={["100px", "100px", "150px"]} />
          <Text py={["5px", "5px", "10px"]}>Create an account</Text>
          <Text maxW={"300px"} fontSize={["16px", "16px", "18px"]}>
            Join our community today! Sign up to access exclusive features
          </Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Image src={Vector3} boxSize={["100px", "100px", "150px"]} />
          <Text py={["5px", "5px", "10px"]}>Enjoy your app</Text>
          <Text maxW={"300px"} fontSize={["16px", "16px", "18px"]}>
            Seamless experiences await! Dive into a world of convenience
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Process;
