import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HStack, Card, CardHeader, CardBody, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <HStack spacing={6} flex alignItems={"center"} height='full'>
      <Link href={"/about"}>
        <Card>
          <CardHeader>About Page</CardHeader>
          <CardBody>
            <Text>This is a public route for every user!</Text>
          </CardBody>
        </Card>
      </Link>
      <Link href={"/login"}>
        <Card>
          <CardHeader>Login Page</CardHeader>
          <CardBody>
            <Text>This is a private route for unauthenticated user!</Text>
          </CardBody>
        </Card>
      </Link>
      <Link href={"/profile"}>
        <Card>
          <CardHeader>Profile Page</CardHeader>
          <CardBody>
            <Text>This is a private route for authenticated user!</Text>
          </CardBody>
        </Card>
      </Link>
    </HStack>
  );
}
