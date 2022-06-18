import { Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import Category from '../components/home/category'
import Destach from '../components/home/Destach'
import Header from '../components/home/header'

export default function Home() {
  return (
    <Grid
      width="100%"
      templateAreas={`"header""destach" "category""promo""footer"`}
      gridTemplateRows={'17% 35% 8% 15% 1fr'}
      gridTemplateColumns={'1fr'}
      height="100vh"
    >
      <Header />

      <Destach />

      <Category />
      <GridItem pl="2" area={'promo'}>
        promo
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}
