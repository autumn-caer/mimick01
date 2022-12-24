import React from "react";
import { Box, Image } from "@chakra-ui/react";

import subtract from "../images/subtract.png";
import research from "../images/research.png";
import cultibase from "../images/cultibase.png";
import consulting from "../images/consulting.png";
import asterisk from "../images/asterisk.png";

const ConceptFigure: React.FC = () => {
  return (
    <Box position="relative" minHeight="480px">
      <Box
        position="absolute"
        w={31}
        height={31}
        borderRadius="50%"
        backgroundColor="#3f899c"
        left={245}
        top={453}
      ></Box>
      <Box
        position="absolute"
        w="52px"
        height="52px"
        borderRadius="50%"
        backgroundColor="#9c7c3b"
        left={504}
        top={110}
      ></Box>
      <Image
        src={subtract}
        alt="subtract"
        position="absolute"
        w={146}
        left={435}
        top={185}
      />
      <Image
        src={research}
        alt="research"
        position="absolute"
        w={270}
        left={243}
        top={239}
      />
      <Image
        src={cultibase}
        alt="cultibase"
        position="absolute"
        w={260}
        left={259}
        top={45}
      />
      <Image
        src={consulting}
        alt="consulting"
        position="absolute"
        w={264}
        left={79}
        top={90}
      />
      <Image
        src={asterisk}
        alt="asterisk"
        position="absolute"
        w={152}
        left={108}
        top={312}
      />
    </Box>
  );
};

export default ConceptFigure;
