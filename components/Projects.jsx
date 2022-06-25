import { Box, Button, Center, Link, Text } from "@chakra-ui/react";
import React from "react";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";

const Projects = () => {
  return (
    <Box minH={"100vh"} my={10} display={"flex-column"}  >
      <Text textAlign={'center'} fontSize='2xl' >Few Latest Projects...</Text>
      <Center my={4}  display={{base: 'flex-column', md: 'flex'}} >
        <Box w={390} mx={5} borderRadius={"lg"} boxShadow="dark-lg">
          <ProjectOne />
          <Link href='https://coffresh.de/' target="blank" >
          <Button bg={'blue.400'} m={2} >Visit</Button>
          </Link>
        </Box>
        <Box w={390} mx={5} borderRadius={"lg"} boxShadow="dark-lg">
          <ProjectTwo />
           <Link href='https://onecolourhoodie.vercel.app/' target="blank" >
          <Button bg={'blue.400'} m={2} >Visit</Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
};

export default Projects;
