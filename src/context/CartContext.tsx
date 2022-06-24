import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../service/apit'
import { Product } from '../types/ProductsType'
import { useToast } from '@chakra-ui/react'
import { parseCookies, setCookie } from 'nookies'

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[]

  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const { nextCart: cartCookie } = parseCookies()

    if (cartCookie) {
      return JSON.parse(cartCookie)
    }

    return []
  })

  const toast = useToast()

  const addProduct = async (productId: number) => {
    try {
      const productInCart = cart?.find(product => product.id === productId)

      if (productInCart) {
        const { data: productStock } = await api.get<Product>(
          `/products/${productId}`
        )

        if (productStock.amount < productInCart.amount + 1) {
          toast({
            title: 'Produto Fora de estoque',
            status: 'error',
            duration: 7000,
            isClosable: true
          })
          return
        }

        productInCart.amount += 1

        const newCart = [...cart]
        setCookie(null, 'nextCart', JSON.stringify(newCart))
        setCart(newCart)
      } else {
        const { data: product } = await api.get<Product>(
          `/products/${productId}`
        )

        const newProduct = {
          ...product,
          amount: 1
        }

        const newCart = [...cart, newProduct]
        setCookie(null, 'nextCart', JSON.stringify(newCart), {
          maxAge: 86400 * 7,
          path: '/'
        })
        setCart(newCart)
      }
    } catch {
      toast({
        title: 'Erro na adição do produto',
        status: 'error',
        duration: 7000,
        isClosable: true
      })
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updateCart = [...cart]
      const productIndex = updateCart.findIndex(
        product => product.id === productId
      )

      if (productIndex >= 0) {
        const cartSplice = updateCart.splice(productIndex, 1)
        setCart(cartSplice)
      } else {
        toast({
          title: 'Erro na remoção do produto',
          status: 'error',
          duration: 7000,
          isClosable: true
        })
      }
    } catch {
      toast({
        title: 'Erro na remoção do produto',
        status: 'error',
        duration: 7000,
        isClosable: true
      })
    }
  }

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) return

      const productInCart = cart.find(product => product.id === productId)

      if (!productInCart) {
        toast({
          title: 'Erro na alteração do produto do produto',
          status: 'error',
          duration: 7000,
          isClosable: true
        })
        return
      }

      const { data: productStock } = await api.get<Product>(
        `/products/${productId}`
      )

      if (productStock.amount < amount) {
        toast({
          title: 'Quantidade solicitada fora de estoque',
          status: 'error',
          duration: 7000,
          isClosable: true
        })
        return
      }

      productInCart.amount = amount

      const newCart = [...cart]

      setCookie(null, 'nextCart', JSON.stringify(newCart), {
        maxAge: 86400 * 7,
        path: '/'
      })
      setCart(newCart)
    } catch {
      toast({
        title: 'Erro na alteração de quantidade do produto',
        status: 'error',
        duration: 7000,
        isClosable: true
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        updateProductAmount,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
