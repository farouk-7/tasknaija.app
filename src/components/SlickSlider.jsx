import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { testData } from "../testimony";
import { TfiArrowCircleRight } from "react-icons/tfi";

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 600 ? 1 : 2,
    slidesToScroll: 1,
    // slidesToShow: 3,
    // slidesToScroll: 2,
    nextArrow: <TfiArrowCircleRight color="#6BBC3B" size={"25px"} />,
  };
  return (
    <Box>
      <Slider {...settings} px="20px">
        {testData.map((data) => (
          <Flex key={data.id}>
            <Box
              border={"1px solid #828281"}
              borderRadius="10px"
              p={["15px", "15px", "20px"]}
              mr="10px"
              h={["fit-content", "fit-content", "fit-content", "200px"]}
            >
              <Box>
                <Image src={data.img} />
              </Box>
              <Box>
                <Text fontWeight="bold" pt="10px" fontSize="16px">
                  {data.test}
                </Text>
                <Text color="#828281" py="5px">
                  {data.name}
                </Text>
                <Text color="#828281">{data.role}</Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default SlickSlider;
