import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box w="100%">
      <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
        <Text>Mission</Text>
      </Stack>
      <Stack fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "6xl" }}>
        <Text>Cultivate</Text>
        <Text>the Creativity</Text>
      </Stack>
      <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
        <Text>創造性の土壌を耕す</Text>
      </Stack>

      <Stack marginTop={50} spacing={{ base: 5, sm: 5, md: 10, lg: 20 }}>
        <Stack
          spacing={2}
          fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "sm" }}
        >
          <Text>組織の創造性が発揮されている状態とは、</Text>
          <Text>
            多様な個性が対話によって混ざり合い、理念に基づく事業を通じて、、
          </Text>
          <Text>社会に価値を生み出し続けている状態です。</Text>
        </Stack>

        <Stack
          spacing={2}
          fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "sm" }}
        >
          <Text>
            それはまるで森林にそびえる大樹のように、複雑な生態系のなかで成り立っています。
          </Text>
          <Text>
            種が芽吹き、根を張りながら幹をなすことで、花が咲き、果実が実る。
          </Text>
          <Text>それが誰かの糧となり、また次の萌芽を生む。</Text>
          <Text>
            その生命の循環を一面的に切り取ろうとしたとき、とたんにその本質は見えなくなってしまいます。
          </Text>
        </Stack>

        <Stack
          spacing={2}
          fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "sm" }}
        >
          <Text>
            私たちは、人と組織と社会の関係性を、常に複眼的にとらえます。
          </Text>
          <Text>
            人材育成から、組織開発、組織デザイン、事業開発、経営戦略まで。
          </Text>
          <Text>
            多様な専門知を有機的に編み直すことによって、組織の創造性の土壌を耕していきます。
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
