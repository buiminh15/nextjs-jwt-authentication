import React from "react";
import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import Error from "next/error";
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
    } catch (error: Error) {
      throw new Error(error);
    }
  };

  return (
    <Flex direction={"column"}>
      <Heading fontSize='xl'>Login</Heading>
      <Input value='john@mail.com' disabled />
      <Input value='changeme' disabled />
      <Button onClick={handleLogin}>Login</Button>
    </Flex>
  );
}

export default LoginPage;
