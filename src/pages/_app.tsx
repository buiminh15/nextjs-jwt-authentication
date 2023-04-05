import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container
        paddingBlockStart={6}
        width={"full"}
        height='full'
        className={montserrat.className}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Container>
    </ChakraProvider>
  );
}
