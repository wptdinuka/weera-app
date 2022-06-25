import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutGrid = () => {
  return (
    <Box minH={"100vh"}>
      <Center  >
        <HStack boxShadow={"dark-lg"} 
        borderRadius={'lg'}
        display={{base: 'flex-column', md: 'flex'}}
        my={8}  >
          <VStack>
            <Image w={{base: 230, md: 300}}  mt={10} mx={10} 
            borderRadius={'lg'}
          src="/portrait.jpg"
          alt="wpt" ></Image>
            <Text w={{base: 260, md: 300}}  fontSize={'lg'} p={5} textAlign={"center"}>
              I am a Student from Sri Lanka and am currently studying in TH
              WILDAU. I am very experienced in gathering new Information in
              order to expand My Knowledge to adapt and work in new and
              different Environments.
            </Text>
          </VStack>
          <VStack pr={{base: 0, md: 10}} pb={5} >
            <Text mt={2}  fontSize={"xl"}>Education</Text>
            <Box
              backgroundImage={"/rc.jpg"}
              backgroundSize={"cover"}
              borderRadius={"lg"}
              w={{base: 250, md: 350}}
            >
              <Text
                fontSize={{ base: 'sm', md: 'xl', lg: 'xl' }}
                py={5}
                backgroundColor={"whiteAlpha.800"}
                borderRadius={"lg"}
                textAlign="center"
              >
                ROYAL COLLAGE COLOMBO <br />
                Batch-2015
              </Text>
            </Box>
            <Box
              backgroundImage={"/thw.jpg"}
              backgroundSize={"cover"}
              borderRadius={"lg"}
              w={{base: 250, md: 350}}
            >
              <Text
                fontSize={{ base: 'sm', md: 'xl', lg: 'xl' }}
                py={5}
                backgroundColor={"blackAlpha.700"}
                borderRadius={"lg"}
                color="white"
                textAlign={"center"}
              >
                TH WILDAU <br />
                3rd Semester
              </Text>
            </Box>
            <Text fontSize={"xl"} py={3}>
              Am acquainted with...{" "}
            </Text>
            <ButtonGroup
              w={{base: 250, md: 340}} 
              p={3} 
              backgroundColor={"blackAlpha.500"}
              display="flex-column" 
              borderRadius={'lg'}
            >
              <Button my={2} ml={2}>HTML</Button>

              <Button>Javascript</Button>
              <Button my={2}>CSS</Button>
              <Button >React</Button>
        <Button >SQL</Button>
              <Button my={2}>Java</Button>
              <Button>Graphic Design</Button>
              <Button my={2}>Git</Button>
              <Button >Node</Button>
              <Button>CMS</Button>
              <Button>Linux</Button>
            </ButtonGroup>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default AboutGrid;
