import { COOKIES, URL_PATHS } from "@/constants";
import { authService } from "@/services/authService";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import useSWR from "swr";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();
  const { data, error } = useSWR(URL_PATHS.PROFILE, authService.getProfile);

  if (error) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    Cookie.remove(COOKIES.TOKEN);
    router.push("/");
  };

  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <div>
      <Flex gap={10} direction={"column"}>
        <Text> ProfilePage</Text>
        <HStack>
          <Button variant={"ghost"} onClick={handleBackToHome}>
            Back to Home
          </Button>
          <Spacer />
          <Button onClick={handleLogout}>Logout</Button>
        </HStack>
      </Flex>

      <Grid
        h="200px"
        gap={4}
        templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
        templateRows={{ sm: "1fr", md: "1fr 1fr" }}
        gridAutoRows={"1fr"}
        mt={10}
      >
        <GridItem
          rowSpan={{ sm: 1, md: 2 }}
          colSpan={1}
          bg="tomato"
          position={"relative"}
        >
          <Image alt="" src={data.avatar} fill style={{ objectFit: "cover" }} />
        </GridItem>
        <GridItem
          colSpan={{ sm: 1, md: 2 }}
          bg="facebook.500"
          paddingInlineStart={4}
        >
          <Text>{data.name}</Text>
        </GridItem>
        <GridItem
          colSpan={{ sm: 1, md: 2 }}
          bg="facebook.500"
          paddingInlineStart={4}
        >
          <Text>{data.email}</Text>
        </GridItem>
      </Grid>
    </div>
  );
}

export default ProfilePage;
