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

import { useCartContext } from '../../../context/CartContext'
import { CartItemsAmount } from '../Products/ProductCart'
import { formatPrice } from '../../../utils/format'

export const CartItem = (ProductItem: Product) => {
  const { cart, updateProductAmount, removeProduct } = useCartContext()

  const cartFormatted = cart.map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    formattedSubtotalPrice: formatPrice(product.price * product.amount)
  }))
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.price * product.amount
      return sumTotal
    }, 0)
  )

  async function handleProductIncrement(product: Product) {
    await updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    })
  }

  async function handleProductDecrement(product: Product) {
    await updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
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
