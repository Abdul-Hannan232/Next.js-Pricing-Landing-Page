"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/icon";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  console.log("ListItem Props", props);

  return (
    <HStack as="li" spacing={"5"} {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW={"994px"}
      margin={"auto"}
      mt="-64"
      bg="white"
      borderRadius={"12px"}
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex height="336px">
        {/* Left Box */}
        <Box bg={"#F0EAFB"} p={"0 40px"} textAlign={"center"}>
          <Text fontWeight={800} fontSize="24px" color={"#171923"} mt={"57px"}>
            Premium PRO
          </Text>
          <Heading
            fontWeight={800}
            fontSize="60px"
            color={"#171923"}
            mt={"16px"}
          >
            $329
          </Heading>
          <Text fontWeight={500} fontSize="18px" color={"#171923"} mt={"8px"}>
            Billed just once
          </Text>
          <Button
            fontWeight={700}
            fontSize="16px"
            color={"#F7FAFC"}
            bg={"#805AD5"}
            width={"282px"}
            mt={"24px"}
            mb={"60px"}
          >
            Get Started
          </Button>
        </Box>
        {/* Right Box */}
        <Box p={"60px"} fontSize={"18px"}>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing={"16px"} pt={"24px"}>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
