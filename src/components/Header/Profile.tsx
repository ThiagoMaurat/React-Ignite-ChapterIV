import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileeProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileeProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr="4" textAlign={"right"}>
          <Text>Thiago Maurat</Text>
          <Text color="gray.300" fontSize="small">
            thiagomaurat@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thiago Maurat"
        src="https://github.com/ThiagoMaurat.png"
      />
    </Flex>
  );
}
