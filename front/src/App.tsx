import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Article from "./components/Article";
import Tiles from "./components/Tiles";
import Topic from "./components/Topic";
import QueryForm from "./components/QueryForm";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./Theme";
import { workTiles, mediaTiles } from "./test_data";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box marginTop={120}>
        <Box width="80%" mx="auto">
          <Hero />
          <Slider />
          <Article />
          <Tiles
            sectionTitile="WORKS"
            description="実績一覧"
            tiles={workTiles}
          />
          <Tiles
            sectionTitile="MEDIA"
            description="こちらでもMIMICK01のことをお話ししています"
            tiles={mediaTiles}
          />
          <Topic />
          <QueryForm />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
