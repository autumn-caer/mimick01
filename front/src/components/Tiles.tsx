import React from "react";
import { tile } from "../interfaces";

import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

interface TilesPorps {
  sectionTitile: string;
  description: string;
  tiles: tile[];
}

const Tiles: React.FC<TilesPorps> = ({ sectionTitile, description, tiles }) => {
  return (
    <Box marginBottom="20%">
      <Stack
        fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
        spacing={10}
      >
        <Text>{sectionTitile}</Text>
        <Text>{description}</Text>
      </Stack>

      <Grid
        marginTop="5%"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={20}
      >
        {tiles.map((tile, index) => {
          return (
            <GridItem paddingBottom={10} paddingX={5} key={index}>
              <Stack>
                <AspectRatio ratio={2 / 1}>
                  <Image src={tile.imageUrl}></Image>
                </AspectRatio>
                <Text fontSize="md">{tile.title}</Text>
                {tile.description && (
                  <Text fontSize="sm">{tile.description}</Text>
                )}
              </Stack>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Tiles;
