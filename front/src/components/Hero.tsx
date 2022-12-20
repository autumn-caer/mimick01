import React from "react";
import { Box, Text, Stack, Grid, GridItem, Image } from "@chakra-ui/react";

import hero_image from "../images/ccm-min.jpeg";

const Hero: React.FC = () => {
  return (
    <Box w="100%">
      <Box>
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
      <Box marginTop="100px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Image src={hero_image} alt="Dan Abramov" />
          </GridItem>
          <GridItem>
            <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "75%" }}>
              <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
                <Text>Creative Cultivation Model</Text>
              </Stack>
              <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
                <Text>組織の創造性を開発する</Text>
                <Text>理論的基盤</Text>
              </Stack>
              <Stack marginTop={50}>
                <Stack
                  spacing={{ base: 5, sm: 5, md: 10, lg: 10 }}
                  fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "sm" }}
                >
                  <Text>
                    組織という複雑な生命システムを一面的に切り取ろうとしたとき、私たちは極端な二元論に狭窄されがちです。ヒトか、コトか。内か、外か。組織か、事業か。管理か、自由か。変化か、安定か。
                  </Text>
                  <Text>
                    組織は常に、複雑な葛藤のなかで成り立っています。目先の矛盾を解消しようとせず、高次に止揚させること。組織に全体性を取り戻し、人々の創造性を輝かせる、各論を有機的に編み直すための見取図。それが「Creative
                    Cultivation Model（CCM）」です。
                  </Text>
                  <Text>
                    このモデルは、「個人」「チーム」「組織」の3階層の主体が、創造性を発揮した状態を示しています。どんな組織も、その構成要素は人です。多様な「個人」が、各々の衝動に基づいて探究し、専門性を磨き続けている状態が不可欠です。そして、個が寄り集まった「チーム」は、集団としての志向性を持ち、絶えざる対話を通して、組織に役割貢献を果たします。複数のチームから成る「組織」は、自分たちのアイデンティティを大切にしながら、事業を通して理念を体現し、社会的価値を生み出します。これらが循環している状態が、組織が創造的である状態です。
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
