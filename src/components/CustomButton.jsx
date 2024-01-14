import { Button } from "@chakra-ui/button"
// import React from "react"

export const CustomButton = ({leftIcon,btnText,h, hover="#0C310C", color="white", onClick, px ="18px", py="15px", bg, borderRadius="20px", border="none",mr,w }) => {

  return (
    <Button
      fontSize="12px"
      py={py}
      px={px}
      bg={bg || "#1034A6"}
      color={color}
      h={h}
      _hover={{ hover }}
      onClick={onClick}
      borderRadius={borderRadius}
      border={border}
      mr={mr}
      w={w}
      leftIcon={leftIcon}
    >
      {btnText}
    </Button>
  );
}
