import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'
import { FiGift } from 'react-icons/fi'

export type CartProductMetaProps = {
  isGiftWrapping?: boolean
  name: string
  description: string
  image: string
}

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isGiftWrapping = true, image, name, description } = props
  return (
    <Stack direction="row" spacing="3" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4" marginRight={'10px'}>
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="small">
            {description}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  )
}
