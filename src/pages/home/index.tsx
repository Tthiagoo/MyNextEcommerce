import { Grid } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import Category from '../../components/home/Category'
import Destach from '../../components/home/Destach'
import Header from '../../components/home/Header'

import Products from '../../components/home/Products'
import Promo from '../../components/home/Promo'
export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}
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
