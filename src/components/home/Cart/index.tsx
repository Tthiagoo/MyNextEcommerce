import { Box, Stack, Heading, Flex, HStack, Link, Text } from '@chakra-ui/react'

import { useCartContext } from '../../../context/CartContext'

import { formatPrice } from '../../../utils/format'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'

export default function Cart() {
  const { cart } = useCartContext()

  const cartFormatted = cart.map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    formattedSubtotalPrice: formatPrice(product.price * product.amount)
  }))
  console.log(cartFormatted)
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.price * product.amount
      return sumTotal
    }, 0)
  )

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '1' }}
      py={{ base: '6', md: '8', lg: '1' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '4' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>

          <Stack spacing="6">
            {cartFormatted.map(item => (
              <CartItem
                key={item.id}
                {...item}
                formatedPrice={item.formattedPrice}
                formattedSubtotalPrice={item.formattedSubtotalPrice}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={'blue.200'}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
