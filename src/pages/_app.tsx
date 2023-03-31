import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ChakraProvider, Container } from "@chakra-ui/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container width={"full"} height='full' className={montserrat.className}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
