import React from "react";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.rings.min.js";
import * as THREE from "three";
import styles from "../styles/Home.module.css";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin, FaCommentAlt } from "react-icons/fa";

const GridOne = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
           mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xd4d4d4,
  color: 0x3461ed
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.vanta} ref={vantaRef}>
      <Center>
        <VStack>
          <Text 
          backgroundColor={"whiteAlpha.700"}
          fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }} mt="32" border={"4px"} p={3} fontWeight={400}>
            Dinuka Weerasingha
          </Text>
          <Text
            color={"white"}
            fontSize={{ base: 'xx-small', md: '2xl', lg: '2xl' }}
            backgroundColor={"blackAlpha.900"}
            px={{ base: 2, md: 12, lg: 12 }}
            py={1} 
          >
            Frontend Developer, Backend Devloper, Programmer, Student,
            Entrepreneur
          </Text>
          <HStack py={2} >
            <Button>
              <Link href="https://github.com/wptdinuka" target={"_blank"}>
                <FaGithubSquare size={30} />
              </Link>
            </Button>
            <Button>
              <Link
                href="https://www.linkedin.com/in/dinuka-weerasingha-a809211a0/"
                target={"_blank"}
              >
                <FaLinkedin size={30} />
              </Link>
            </Button>
            <Button>
              <Link href="https://www.devwpt.tech/" target={"_blank"}>
                <FaCommentAlt size={30} />
              </Link>
            </Button>
          </HStack>
          <HStack display={{base: 'flex-column', lg: 'flex'}}   >
            <Link href="/about" >
            <Box 
            backgroundImage={'/m1.jpg'}
              backgroundSize={'cover'}
              borderRadius={'lg'} 
              
            >
              <Text 
              fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
              textAlign='center'
             
              px={20}
              py={{base: 2, md: 5}}
              backgroundColor={'whiteAlpha.700'}
              borderRadius={'lg'}
              >About</Text>
            </Box>
            </Link>
             <Link href="/about" >
            <Box
            backgroundImage={'/p2.jpg'}
              backgroundSize={'cover'}
              borderRadius={'lg'} 
            >
              <Text
              fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
              px={20}
              py={{base: 2, md: 5}}
               backgroundColor={'whiteAlpha.700'}
               borderRadius={'lg'}
              >My Projects</Text>
            </Box>
            </Link>
             <Link href="/about" > 
            <Box
            backgroundImage={'/phone.jpg'}
              backgroundSize={'cover'}
              borderRadius={'lg'}  
              >

              <Text
              fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
              px={20}
              py={{base: 2, md: 5}}
              textAlign='center'
        backgroundColor={'whiteAlpha.700'}
        borderRadius={'lg'}
              >Contact</Text>
            </Box>
            </Link>
          </HStack>
        </VStack>
      </Center>
    </div>
  );
};

export default GridOne;
