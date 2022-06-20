import { GridItem, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import { api } from '../../../service/apit'
import { Product } from '../../../types/ProductsType'
import { ProductCard } from './ProductCart'
import { ProductGrid } from './ProductGrid'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products')
      setProducts(response.data)
    }

    loadProducts()
  }, [])
  return (
    <GridItem
      display={'flex'}
      flexDirection="column"
      alignItems={'center'}
      area={'products'}
      marginTop="12px"
    >
      <Heading size="md" marginBottom={'10px'}>
        Products em Destaque
      </Heading>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </GridItem>
  )
}
