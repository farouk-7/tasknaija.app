import { Box, Flex, Text } from "@chakra-ui/react";
import downloadBg from "../../assets/downloadBg.png";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { CustomButton } from "../../components/CustomButton";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";


const DownloadPage = () => {
  //  useEffect(() => {
  //    Aos.init({ duration: 2000 });
  //  }, []);
  const handleIOS=()=>{
    alert("iOS app not available yet")
  }
  const handleAndroid = () => {
    alert("Android app not available yet");
  };
  return (
    <Box
      id="download"
      bgImage={downloadBg}
      height={["fit-content", "fit-content", "550px"]}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      p={["30px 20px", "30px 20px", "50px 70px"]}
    >
      <Flex
        justifyContent="center"
        flexDir={["column", "column", "row"]}
        alignItems="center"
        py="10%"
        gap="50px"
      >
        <Box
          bg={"#1034A6"}
          borderRadius={"10px"}
          p={["30px", "30px", "50px"]}
          color={"#fff"}
          // data-aos="fade-right"
        >
          <Text fontSize={"20px"} fontWeight={700}>
            Download our app for iOS and iPadOS
          </Text>
          <Text maxW="400px" py={["10px", "10px", "20px"]} fontSize={"16px"}>
            Download Our App for iOS and iPadOS to Access a World of Convenience
            at Your Fingertips.
          </Text>
          <Flex justifyContent={["center", "center", "flex-start"]}>
            <CustomButton
              color="#1034A6"
              btnText={"Download for iOS"}
              bg="#fff"
              leftIcon={<FaApple size={"20px"} color="blue" />}
              onClick={handleIOS}
            />
          </Flex>
        </Box>

        <Box
          bg={"#fff"}
          borderRadius={"10px"}
          p={["30px", "30px", "50px"]}
          color={"#6BBC3B"}
          // data-aos="fade-left"
        >
          <Text fontSize={"20px"} fontWeight={700}>
            Download our app for Android
          </Text>
          <Text maxW="400px" py={["10px", "10px", "20px"]} fontSize={"16px"}>
            Get started by downloading our app on your Android device today!
          </Text>
          <Flex justifyContent={["center", "center", "flex-start"]}>
            <CustomButton
              btnText={"Download for Android"}
              bg={"#6BBC3B"}
              leftIcon={<BiLogoPlayStore size={"20px"} />}
              onClick={handleAndroid}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DownloadPage;
