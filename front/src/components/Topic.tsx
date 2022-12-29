import React from "react";
import { Box, Stack, Text, Flex, Image } from "@chakra-ui/react";
import nies_thumb from "../images/nies_thumb.png";

const Topic: React.FC = () => {
  return (
    <Box>
      <Flex justify="center" position="relative">
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}>
          <Stack spacing={10} marginBottom="30%">
            <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
              <Text>CARRER</Text>
            </Stack>
            <Stack fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}>
              <Text>統合された知を目指して。</Text>
              <Text>共に探究する仲間を</Text>
              <Text>募集しています。 </Text>
            </Stack>
            <Stack
              fontSize={{ base: "xs", sm: "md", md: "md", lg: "md" }}
              w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
            >
              <Text>
                MIMIGURIでは、デザイナー、ファシリテーター、エンジニア、コンサルタント、研究者など、組織の創造性を共に探究する仲間を募集しています。
              </Text>
              <Text>ご興味をお持ちの方は、お気軽にご連絡ください。</Text>
            </Stack>
          </Stack>
        </Box>
        <Box position="absolute" top="54px" left="auto" right="-7.5%">
          <Image src={nies_thumb} borderRadius="full" boxSize="300px" />
          <Image src={nies_thumb} borderRadius="full" boxSize="200px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Topic;
