import {
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  Icon,
  IconButton,
  Link,
  Select,
  SelectProps,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from '@chakra-ui/icons'
import { Product } from '../../../types/ProductsType'
import { parseCookies } from 'nookies'
import { useCartContext } from '../../../context/CartContext'
import { CartItemsAmount } from '../Products/ProductCart'

export const CartItem = (ProductItem: Product) => {
  const { cart, updateProductAmount } = useCartContext()

  async function handleProductIncrement(product: Product) {
    console.log(ProductItem)
    console.log(cart)
    await updateProductAmount(
      {
        productId: product.id,
        amount: cartItemsAmount[product.id]
      },
      'update'
    )
  }

  async function handleProductDecrement({ id, amount }: Product) {
    console.log(cart)
    console.log('---amout do handle----')
    console.log(amount)
    await updateProductAmount(
      {
        productId: id,
        amount: amount
      },
      'decrete'
    )
  }
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  const { name, description, imageUrl, currency, price, id, amount } =
    ProductItem
  const AmountSelect = (props: SelectProps) => {
    return (
      <ButtonGroup marginLeft={'15px'} size="sm" isAttached variant="outline">
        <IconButton
          aria-label="Add to friends"
          disabled={ProductItem.amount == 1}
          onClick={() => handleProductDecrement(ProductItem)}
          icon={<MinusIcon />}
        />
        {cartItemsAmount[id] || 0}
        <IconButton
          aria-label="Add to friends"
          onClick={() => handleProductIncrement(ProductItem)}
          icon={<AddIcon />}
        />
      </ButtonGroup>
    )
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} description={description} image={imageUrl} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
      >
        <AmountSelect />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <AmountSelect value={cartItemsAmount[id] || 0} />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
React.memo(CartItem)
