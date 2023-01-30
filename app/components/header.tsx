"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as={"section"} pb="112px">
      <Box
        textAlign={"center"}
        color={"#F7FAFC"}
        bg={"#6B46C1"}
        pt={"88.45"}
        pb={"198"}
        px={"32px"}
        height={"397px"}
      >
        <Heading fontWeight={800} fontSize="48px">
          Simple pricing for your business
        </Heading>
        <Text fontWeight={500} fontSize="24px" pt={"16.08"}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
