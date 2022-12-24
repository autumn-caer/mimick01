import React from "react";
import { Box, Stack, Text, Grid, GridItem, Button } from "@chakra-ui/react";

import ConceptFigure from "./ConceptFigure";

const Article: React.FC = () => {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        <GridItem>
          <Stack spacing={10} marginBottom="30%">
            <Stack fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
              <Text>Service</Text>
            </Stack>
            <Stack fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}>
              <Text>創造性の土壌を耕す、</Text>
              <Text>3つのアプローチ</Text>
            </Stack>
            <Stack
              display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
            >
              <ConceptFigure />
            </Stack>
            <Stack fontSize={{ base: "md", sm: "md", md: "md", lg: "md" }}>
              <Text>
                Missionである「CULTIVATE the CREATIVITY」を軸に、Creative
                Cultivation
                Model（CCM）の理論開発・社会実装を行う「多様事業」の創造を実践しています。
              </Text>
              <Text>
                経営コンサルファーム・デザインファーム・研究機関・テクノロジー、あらゆるケイパビリティを掛け合わせて知識創造の循環を創りながら「創造性の土壌」を耕します。
              </Text>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
            <ConceptFigure />
          </Stack>
        </GridItem>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={20}
      >
        <GridItem>
          <Stack>
            <Text fontWeight="bold">01</Text>
            <Text>Consulting</Text>
            <Text fontWeight="bold">コンサルティング</Text>
            <Text fontSize="xs">
              クライアントの課題の本質を見極め、CCMに基づいて組織ファシリテーションを推進します。人材採用、人材育成、組織開発、組織設計、事業開発のそれぞれの方法論を組み合わせ、ワンストップでイノベーションのプロセスに伴走します。
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack marginTop={{ base: 0, sm: 0, md: 0, lg: 20 }}>
            <Text fontWeight="bold">02</Text>
            <Text>Cultivase</Text>
            <Text fontWeight="bold">カルティベース</Text>
            <Text fontSize="xs">
              組織ファシリテーションの技を探究するためのウェブメディア、オンラインプログラムを運営しています。CCMを基盤にしながら、イノベーション、マネジメント、デザイン、学習、ファシリテーションに関する最新の理論と実践知を提供しています。
            </Text>
          </Stack>
          <Button
            w="100%"
            colorScheme="cyan"
            variant="outline"
            marginTop="20px"
          >
            CULTIBASE
          </Button>
        </GridItem>
        <GridItem>
          <Stack marginTop={{ base: 0, sm: 0, md: 0, lg: 40 }}>
            <Text fontWeight="bold">03</Text>
            <Text>RESEARCH</Text>
            <Text fontWeight="bold">リサーチ</Text>
            <Text fontSize="xs">
              社内に研究チームを組成し、CCMの発展と体系化を目指して研究開発に取り組んでいます。先行研究のレビュー、フィールド調査、現場の実験、学術論文の執筆、書籍の出版などを通して、知を編み直し、実践を通して伝承させていく。これも私たちの重要な使命です。
            </Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Article;
