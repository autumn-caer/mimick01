import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Text,
  VStack,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100vw" h="20vh" as="header" position="fixed">
      <Flex justify="center" width="full" shadow="sm" top={0} py={4} px={8}>
        <Box p="4" bg="red.400">
          <Text fontSize="2xl">MIRAIDOs</Text>
        </Box>
        <Spacer />
        <Box
          w="10vw"
          paddingTop="3vw"
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        >
          <VStack alignItems="start" spacing="30">
            <Box>MISSION</Box>
            <Box>CCM</Box>
            <Box>MESSAGE</Box>
            <Box>SERVICE</Box>
            <Box>WORKS</Box>
            <Box>MEDIA</Box>
            <Box>CAREER</Box>
            <Box>CONTACT</Box>
          </VStack>
        </Box>
        <Box pt={3}>
          <IconButton
            bg="transparent"
            aria-label="search"
            color="black"
            rounded="full"
            icon={<HamburgerIcon w={7} h={7} />}
            onClick={onOpen}
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent backgroundColor="#342b28" color="#6e5c56">
          <ModalHeader>
            <Flex
              justify="center"
              width="full"
              shadow="sm"
              top={0}
              py={4}
              px={8}
            >
              <Box p="4">
                <Text fontSize="2xl">MIRAIDOs</Text>
              </Box>
              <Spacer />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingTop="20vw">
            <VStack spacing="30">
              <VStack spacing="7">
                <Text fontSize="xl">MISSION</Text>
                <Text fontSize="xl">CCM</Text>
                <Text fontSize="xl">MESSAGE</Text>
                <Text fontSize="xl">SERVICE</Text>
                <Text fontSize="xl">STORE</Text>
              </VStack>
              <Box></Box>
              <VStack spacing="7">
                <Text fontSize="xl">MEDIA</Text>
                <Text fontSize="xl">CAREER</Text>
                <Text fontSize="xl">CONTACT</Text>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
