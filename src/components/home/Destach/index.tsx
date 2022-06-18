import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Img,
  Image
} from '@chakra-ui/react'
import setupGamer from '../../../../public/assets/setupGamer.jpg'
import { FaShoppingCart, FaHeart, FaSearch, FaArrowRight } from 'react-icons/fa'
//import Image from 'next/image'
export default function Destach() {
  return (
    <GridItem
      area={'destach'}
      style={{
        backgroundImage:
          'linear-gradient(to right top, #7b5cee, #0092ff, #00b9ff, #5cd7f6, #b5f0f0)'
      }}
    >
      <Image src="/setupGamer.jpg" w="100%" height="100%" />
    </GridItem>
  )
}
