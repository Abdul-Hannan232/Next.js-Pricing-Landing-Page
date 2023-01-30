"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as={"section"} pb="28">
      <Box
        textAlign={"center"}
        color={"gray.50"}
        bg={"purple.600"}
        pt={"88.45px"}
        pb={"198px"}
        px={"8"}
        height={"397px"}
      >
        <Heading fontWeight={"extrabold"} fontSize="5xl">
          Simple pricing for your business
        </Heading>
        <Text fontWeight={"medium"} fontSize="2xl" pt={"4"}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
