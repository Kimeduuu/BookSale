"use client"
import {Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode();
  const { push } = useRouter();

  return (
    <Flex 
      height="100vh" 
      align="center" 
      justify="center"
      gap={10}
    >
      <Text>
        login
      </Text>

      <Text>

        {/* actual color mode: {colorMode} */}

      </Text>

      <Button
        bgColor={`${colorMode}.button`}
        onClick={toggleColorMode}>
        change color mode
      </Button>
    </Flex>
  );
}
