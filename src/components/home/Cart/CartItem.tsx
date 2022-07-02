import {
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  IconButton,
  Link
} from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from '@chakra-ui/icons'
import { Product } from '../../../types/ProductsType'

import { useCartContext } from '../../../context/CartContext'

interface ProductFormated extends Product {
  formatedPrice: String
  formattedSubtotalPrice: string
}

export const CartItem = (ProductItem: ProductFormated) => {
  const { updateProductAmount, removeProduct } = useCartContext()

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

  const {
    name,
    description,
    imageUrl,
    currency,
    id,
    amount,
    formatedPrice,
    formattedSubtotalPrice
  } = ProductItem

  const AmountSelect = () => {
    return (
      <ButtonGroup marginLeft={'15px'} size="sm" isAttached variant="outline">
        <IconButton
          aria-label="Add to friends"
          disabled={amount == 1}
          onClick={() => handleProductDecrement(ProductItem)}
          icon={<MinusIcon />}
        />
        <Button>{amount}</Button>
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
      <CartProductMeta
        formatedPrice={formatedPrice}
        name={name}
        description={description}
        image={imageUrl}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
      >
        <AmountSelect />
        <PriceTag price={formattedSubtotalPrice} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => handleRemoveProduct(id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link
          onClick={() => handleRemoveProduct(id)}
          fontSize="sm"
          textDecor="underline"
        >
          Delete
        </Link>
        <AmountSelect />
        <PriceTag price={formattedSubtotalPrice} currency={currency} />
      </Flex>
    </Flex>
  )
}
