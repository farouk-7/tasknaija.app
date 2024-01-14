import { Box, Flex, Text } from "@chakra-ui/react";
import background1 from "..//../assets/Hero1.png";
import Navigation from "../Nav";
import { CustomButton } from "../CustomButton";
import Slider from "react-slick";
import bg1 from "../../assets/bg1.png"
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";

const Hero = () => {
  const BgImages = [
    {
      id: 1,
      url: bg1,
    },
    {
      id: 2,
      url: bg2,
    },
    {
      id: 3,
      url: bg3,
    },
    {
      id: 4,
      url: bg4,
    },
    {
      id: 5,
      url: background1,
    },
  ];
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
  return (
    <Box id="home" overflow="hidden">
      <Navigation />
      <Slider {...settings}>
        {BgImages.map((image, index) => (
          <Box key={index}>
            <Box
              backgroundImage={[`url(${image.url})`]}
              height="fit-content"
              backgroundSize= {["cover"]}
              backgroundPosition={"center"}
              width="full"
              backgroundRepeat= "no-repeat"
              paddingBottom= "20px"
            >
              <Box w={"100%"}>
                <Text
                  fontSize={["50px", "50px", "50px", "68.4px"]}
                  pt={["30%", "15%"]}
                  color={"#fff"}
                  margin={"0px auto"}
                  textAlign={"center"}
                  maxW={"900px"}
                  fontWeight={"bold"}
                  lineHeight={"85px"}
                >
                  Local Magic: Your Services Your Way
                </Text>
                <Text
                  pt="20px"
                  color={"#fff"}
                  margin={"0px auto"}
                  textAlign={"center"}
                  maxW={"450px"}
                >
                  Explore a world of tailored local services. Book with ease and
                  experience convenience like never before. Your journey begins
                  here
                </Text>
                <Flex justifyContent={"center"} pt="2%">
                  <a href="/#download">
                    <CustomButton btnText={"Try TaskNaija for Free"} />
                  </a>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;
