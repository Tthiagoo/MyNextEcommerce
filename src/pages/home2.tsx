import {
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import { destroyCookie } from 'nookies'
import Category from '../components/home/category'
import Destach from '../components/home/Destach'
import Header from '../components/home/header'
import ModalCart from '../components/home/ModalCart'
import Products from '../components/home/Products'
import Promo from '../components/home/promo'

export default function Home() {
  destroyCookie(null, 'nextCart')
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
