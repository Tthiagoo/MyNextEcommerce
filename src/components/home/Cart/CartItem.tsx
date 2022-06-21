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
  const { cart, updateProductAmount, removeProduct } = useCartContext()

  async function handleProductIncrement(product: Product) {
    await updateProductAmount(
      {
        productId: product.id,
        amount: cartItemsAmount[product.id]
      },
      'update'
    )
  }

  async function handleProductDecrement({ id, amount }: Product) {
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

  const { name, description, imageUrl, currency, price, id } = ProductItem
  const AmountSelect = (props: SelectProps) => {
    return (
      <ButtonGroup marginLeft={'15px'} size="sm" isAttached variant="outline">
        <IconButton
          aria-label="Add to friends"
          disabled={cartItemsAmount[id] == 1}
          onClick={() => handleProductDecrement(ProductItem)}
          icon={<MinusIcon />}
        />
        <Button>{cartItemsAmount[id] || 0}</Button>
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
