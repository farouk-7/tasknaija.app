import { Box, Flex, Image, Text } from "@chakra-ui/react";
import secure from "../../assets/secure.png";
import transparent from "../../assets/transparent.png";
import cross from "../../assets/cross.png";
import wallet from "../../assets/wallet.png";
import flexible from "../../assets/flexible.png";
import personalized from "../../assets/personalized.png";
import booking from "../../assets/booking.png";
import task from "../../assets/task.png";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Explore = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <Box bg="#eee" p={["30px 20px", "30px 20px", "50px 70px"]}>
      <Box
        my="10px"
        // data-aos="zoom-out"
      >
        <Text
          textAlign={"center"}
          fontSize={["20px", "20px", "30px"]}
          fontWeight={"bold"}
        >
          Browse our set of features
        </Text>
        <Text
          margin={"0px auto"}
          fontSize={["16px", "16px", "18px"]}
          textAlign={"center"}
          maxW={"500px"}
          py={["5px", "5px", "10px"]}
        >
          Explore the unique capabilities that set TaskNaija apart. Your
          seamless local service experience starts here.
        </Text>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={["column", "column", "column", "row"]}
        // data-aos="fade-right"
      >
        <Flex
          bg={"#fff"}
          h="150px"
          p={["20px", "20px", "30px"]}
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
          mb={["20px", "20px", "20px", "0px"]}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Secure User Verification
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Ensure safety and trust with our robust KFC authentication process
            </Text>
          </Box>
          <Box>
            <Image src={secure} />
          </Box>
        </Flex>
        <Flex
          bg={"#fff"}
          p={["20px", "20px", "30px"]}
          h="150px"
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={["20px", "20px", "30px"]}
          alignItems={"center"}
          mb={["20px", "20px", "20px", "0px"]}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Transparent Feedback System
            </Text>
            <Text maxW={"300px"} fontSize={["14px", "14px", "16px"]}>
              Drop reviews and read others' experiences for informed
              decision-making
            </Text>
          </Box>
          <Box>
            <Image src={transparent} />
          </Box>
        </Flex>
        <Flex
          bg={"#fff"}
          p={["20px", "20px", "30px"]}
          h="150px"
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Cross-Platform Access
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Download our app on both iOS and Android devices for seamless
              service access
            </Text>
          </Box>
          <Box>
            <Image src={cross} />
          </Box>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        my="20px"
        flexDir={["column", "column", "column", "row"]}
        // data-aos="fade-left"
      >
        <Flex
          bg={"#fff"}
          h="150px"
          p={["20px", "20px", "30px"]}
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
          mb={["20px", "20px", "20px", "0px"]}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Secure Wallet Transaction
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Fund your wallet and make payments conveniently with our secure
              wallet integration
            </Text>
          </Box>
          <Box>
            <Image src={wallet} />
          </Box>
        </Flex>
        <Flex
          bg={"#fff"}
          p={["20px", "20px", "30px"]}
          h="150px"
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
          mb={["20px", "20px", "20px", "0px"]}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Flexible Account Setup
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Register easily as a service provider or user for personalized
              experiences
            </Text>
          </Box>
          <Box>
            <Image src={flexible} />
          </Box>
        </Flex>
        <Flex
          bg={"#fff"}
          p={["20px", "20px", "30px"]}
          h="150px"
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Personalized Favorites
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Keep track of your preferred taskers with a history of favorite
              choices
            </Text>
          </Box>
          <Box>
            <Image src={personalized} />
          </Box>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"flex-start"}
        gap={"33px"}
        alignItems={"center"}
        my="20px"
        flexDir={["column", "column", "column", "row"]}
        // data-aos="fade-right"
      >
        <Flex
          bg={"#fff"}
          h="150px"
          p={["20px", "20px", "30px"]}
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Effortless Service Booking
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Book a service with a few taps and experience hassle-free
              scheduling
            </Text>
          </Box>
          <Box>
            <Image src={booking} />
          </Box>
        </Flex>

        <Flex
          bg={"#fff"}
          p={["20px", "20px", "30px"]}
          h="150px"
          borderRadius={"15px"}
          boxShadow={"md"}
          gap={"30px"}
          alignItems={"center"}
        >
          <Box>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              pb={["5px", "5px", "10px"]}
            >
              Direct Tasker Interaction
            </Text>
            <Text maxW="300px" fontSize={["14px", "14px", "16px"]}>
              Chat directly with taskers upon placing a request for clear
              communication
            </Text>
          </Box>
          <Box>
            <Image src={task} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Explore;
