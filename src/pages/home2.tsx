import { Grid } from '@chakra-ui/react'

import Category from '../components/home/Category'
import Destach from '../components/home/Destach'
import Header from '../components/home/Header'

import Products from '../components/home/Products'
import Promo from '../components/home/Promo'

export default function Home() {
  return (
    <Grid
      width="100%"
      templateAreas={`"header""destach" "category""promo""products"`}
      gridTemplateRows={'20% 30% 13% 30% 1fr'}
      gridTemplateColumns={'1fr'}
      height="100vh"
      overflowY={'scroll'}
    >
      <Header />
      <Destach />
      <Category />
      <Promo />
      <Products />
    </Grid>
  )
}
