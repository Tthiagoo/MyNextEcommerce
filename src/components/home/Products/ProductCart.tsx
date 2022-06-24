import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Product } from '../../../types/ProductsType'
import { useCartContext } from '../../../context/CartContext'

interface PropsCard {
  product: Product
  rootProps?: StackProps
}

export interface CartItemsAmount {
  [key: number]: number
}

export const ProductCard = (props: PropsCard) => {
  const { addProduct, cart } = useCartContext()
  const { ...restProps } = props
  async function handleAddProduct(id: number) {
    await addProduct(id)
  }

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  return (
    <Stack
      spacing={useBreakpointValue({ base: '4', md: '5' })}
      {...restProps.rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={restProps.product.imageUrl}
            alt={restProps.product.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${restProps.product.name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {restProps.product.name}
          </Text>
          <PriceTag
            price={restProps.product.price}
            salePrice={restProps.product.salePrice}
            currency="USD"
          />
          <Text>
            {' '}
            Produtos no carrinho: {cartItemsAmount[restProps.product.id] || 0}
          </Text>
        </Stack>
        <HStack>
          <Rating defaultValue={restProps.product.rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button
          onClick={() => handleAddProduct(restProps.product.id)}
          colorScheme="blue"
        >
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  )
}
