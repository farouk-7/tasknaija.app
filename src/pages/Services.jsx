import { Box, Text } from "@chakra-ui/react";
import Navigation from "../components/Nav";

const Services = () => {
  return (
    <Box>
      <Navigation />
      <Box p="50px 70px">
        <Text>Services</Text>
        <Text>This is my service Page</Text>
      </Box>
    </Box>
  );
};

export default Services;
