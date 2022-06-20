import { Box, Stack, Heading, Flex, HStack, Link } from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import { Product } from '../../../types/ProductsType'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './data'
export default function Cart() {
  const { nextCart: cartCookie } = parseCookies()
  const cartFormated = JSON.parse(cartCookie)
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
            {cartFormated.map((item: Product) => (
              <CartItem key={item.id} {...item} />
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
