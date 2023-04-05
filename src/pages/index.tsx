import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  HStack,
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  VStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import Cookie from "js-cookie";
import { COOKIES } from "@/constants";
import { useEffect, useState } from "react";

const ROUTES = [
  {
    id: 1,
    url: "/about",
    page: "About Page",
    desc: "This is a public route for every user!",
  },
  {
    id: 2,
    url: "/login",
    page: "Login Page",
    desc: "This is a private route for unauthenticated user!",
  },
  {
    id: 3,
    url: "/profile",
    page: "Profile Page",
    desc: "This is a private route for authenticated user!",
  },
];

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = !!Cookie.get(COOKIES.TOKEN);
    setLoggedIn(isAuthenticated);
  }, []);

  return (
    <VStack spacing={10}>
      <Button alignSelf={"flex-end"} onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text>{loggedIn ? "You are logged in" : "You aren't logged in now"}</Text>
      <SimpleGrid columns={{ sm: 1, md: 3 }} gridAutoRows={"1fr"} spacing={10}>
        {ROUTES.map((r) => (
          <Card key={`grid-item-${r.id}`}>
            <Link href={r.url}>
              <CardHeader>{r.page}</CardHeader>
              <CardBody>
                <Text>{r.desc}</Text>
              </CardBody>
            </Link>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
