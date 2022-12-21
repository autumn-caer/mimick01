import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./Theme";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box marginTop={120}>
        <Box width="80%" mx="auto">
          <Hero />
          <Slider />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
