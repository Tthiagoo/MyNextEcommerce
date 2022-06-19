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
      <Box
        width="71%"
        height="15%"
        bottom="calc(48% - 94px);"
        position="absolute"
        backgroundColor="gray.800"
        borderWidth={'1px'}
      >
        <Stack p={3} spacing={{ base: '5', lg: '10' }}>
          <Stack spacing={{ base: '1', lg: '4' }}>
            <Heading size="md">
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

      <Image borderRadius="10px" src="/mainPhoto2.png" width="90%" h="90%" />

      {/*<Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl"></Heading>
        <Text mt={4}></Text>
  </Box>*/}
    </GridItem>
  )
}
