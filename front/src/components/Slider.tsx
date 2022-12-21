import React from "react";
import { Box, AspectRatio, Stack, Text } from "@chakra-ui/react";

const Slider: React.FC = () => {
  return (
    <Stack spacing={10} marginBottom="30%">
      <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
        <Text>Mission</Text>
      </Stack>
      <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
        <Text>MIMICK01が目指すもの</Text>
      </Stack>
      <AspectRatio maxW="90%" ratio={5 / 3}>
        <Box
          as="iframe"
          title="naruto"
          src="https://speakerdeck.com/player/c2b66fadd3074d92a5924c37bcb7afea?"
          allowFullScreen
        />
      </AspectRatio>
    </Stack>
  );
};

export default Slider;
