import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

//import Image from 'next/image'
export default function Destach() {
  return (
    <GridItem
      area={'destach'}
      display="flex"
      alignItems={'start'}
      justifyContent="center"
    >
      <Flex
        width="90%"
        h="90%"
        backgroundImage="url('/mainPhoto2.png')"
        backgroundSize={'cover'}
        justifyContent="center"
        borderRadius="10px"
        alignItems="end"
      >
        <Box
          width="71%"
          height="59%"
          bottom="calc(55% - 128px);"
          position="relative"
          backgroundColor="gray.800"
          borderWidth={'1px'}
        >
          <Stack p={3} spacing={{ base: '5', lg: '10' }}>
            <Stack spacing={{ base: '1', lg: '4' }}>
              <Heading size="lg">
                <Text bgClip="text" bgGradient="linear(to-l, #7EA7F6, #8EEEEE)">
                  Winter Is Coming
                </Text>
              </Heading>
              <Heading size="sm" fontWeight="normal">
                Refresh your wardrobe
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link color={'blue.300'} fontWeight="bold" fontSize="sm">
                Discover now
              </Link>
              <Icon color={'blue.300'} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
      </Flex>

      {/*<Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl"></Heading>
        <Text mt={4}></Text>
  </Box>*/}
    </GridItem>
  )
}
