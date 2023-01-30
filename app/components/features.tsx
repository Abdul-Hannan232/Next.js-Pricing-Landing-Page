"use client";

import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  MoneyBackIcon,
  SetupFeesIcon,
  MonthlySubscriptionIcon,
} from "../icons/icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text fontSize={"lg"} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW={"1024px"} m="auto" pt={"57px"} pb={"40"}>
      <HStack px={"12"} spacing="5">
        <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
        <Feature icon={SetupFeesIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
