import React from "react";
import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import Error, { ErrorProps } from "next/error";
import { authService } from "@/services/authService";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { COOKIES } from "@/constants";

function LoginPage() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const token = await authService.login("john@mail.com", "changeme");
      Cookie.set(COOKIES.TOKEN, token.access_token);
      router.push("/profile");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <Flex
      direction={"column"}
      height={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
    >
      <Heading fontSize="3xl">Login</Heading>
      <Text>Using the default account to login</Text>
      <Input value="john@mail.com" style={{ pointerEvents: "none" }} />
      <Input value="changeme" style={{ pointerEvents: "none" }} />
      <Button bg={"blue.700"} w={"full"} onClick={handleLogin}>
        Login
      </Button>
    </Flex>
  );
}

export default LoginPage;
