import React from "react";
import Header from "./components/Header";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Box bg="red.400">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
