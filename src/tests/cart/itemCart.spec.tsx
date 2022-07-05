import { render, fireEvent } from '@testing-library/react'
import { CartItem, ProductFormated } from '../../components/home/Cart/CartItem'
import { useCartContext } from '../../context/CartContext'

import { Product } from '../../types/ProductsType'
let item: ProductFormated
jest.mock('../../context/CartContext')
const mockedUseCartContext = useCartContext as jest.Mock
const mockedUpdateProductAmount = jest.fn()

describe('tests cart modal', () => {
  beforeEach(() => {
    mockedUseCartContext.mockReturnValue({
      cart: [
        {
          id: 1,
          name: 'Bamboo Tan',
          currency: 'USD',
          price: 199,
          flag: 'new',
          amount: 5,
          imageUrl:
            'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          rating: 4,
          ratingCount: 1,
          description: 'desing'
        },
        {
          id: 2,
          name: 'test Relogio',
          currency: 'USD',
          price: 199,
          flag: 'new',
          amount: 3,
          imageUrl:
            'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          rating: 4,
          ratingCount: 1,
          description: 'teste mock'
        }
      ]
    })
  })
  it('should be able to increase/decrease a product amount', () => {
    const { getAllByTestId, rerender } =  render(<CartItem {...item} />)
    const [incrementFirstProduct] = getAllByTestId('increment-product');
    const [, decrementSecondProduct] = getAllByTestId('decrement-product');
    const [firstProductAmount, secondProductAmount] = getAllByTestId(
      'product-amount'
    );
  })
})
