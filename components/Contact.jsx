import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function ContactForm() {
  const { hasCopied, onCopy } = useClipboard("thwe2434@th-wildau.de");
  const toast = useToast();

  return (
    <Flex
      backgroundImage="/wall.jpg"
      backgroundSize={"cover"}
      align="center"
      justify="center"
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 0, lg: 16 }}
      >
        <Box>
          <VStack
            spacing={{ base: 4, md: 8, lg: 20 }}
            bg={useColorModeValue("whiteAlpha.800", "gray.700")}
            minW={{ base: 100, md: "xl" }}
            borderRadius="lg"
            p={{ base: 0, lg: 8 }}
            px={{ base: 0, lg: 16 }}
          >
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail/>}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/wptdinuka">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub/>}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/dinuka-weerasingha-a809211a0/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <form
                action="https://formsubmit.co/11a42fc5d952e0d92633b24a9c85a2e9"
                method="POST"
              >
       
                <input
                  type="hidden"
                  name="_next"
                  value="https://dinukaweerasingha.com/"
                ></input>
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  minW={{ base: "xs", md: "xl" }}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement  ><BsPerson/></InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement ><MdOutlineEmail/></InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() =>
                        toast({
                          title: "Email Sent.",
                          description:
                            "Will get back to you as soon as possible!",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        })
                      }
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </form>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
