/* eslint-disable react/prop-types */
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({label, type, ...props }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        {/* <Input placeholder={placeholder} mb={mb} bg={bg} color={"#000"} /> */}
        <Input type={type} {...props} color={"#000"} />
      </FormControl>
    </Box>
  );
};

export default FormInput;
