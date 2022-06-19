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
import Category from '../components/home/category'
import Destach from '../components/home/Destach'
import Header from '../components/home/header'
import Promo from '../components/home/promo'

export default function Home() {
  return (
    <Grid
      width="100%"
      templateAreas={`"header""destach" "category""promo""footer"`}
      gridTemplateRows={'20% 30% 10% 25% 1fr'}
      gridTemplateColumns={'1fr'}
      height="100vh"
      overflowY={'scroll'}
    >
      <Header />

      <Destach />

      <Category />
      <Promo />
      <GridItem
        display={'flex'}
        flexDirection="column"
        alignItems={'center'}
        pl="2"
        bg="blue.300"
        area={'footer'}
        marginTop="12px"
      >
        <Circle
          size={'55px'}
          backgroundImage="url('/mainPhoto2.png')"
          backgroundSize={'cover'}
        >
          test
        </Circle>
        <Circle
          size={'55px'}
          backgroundImage="url('/mainPhoto2.png')"
          backgroundSize={'cover'}
        >
          test
        </Circle>
        <Circle
          size={'55px'}
          backgroundImage="url('/mainPhoto2.png')"
          backgroundSize={'cover'}
        >
          test
        </Circle>
        <Circle
          size={'55px'}
          backgroundImage="url('/mainPhoto2.png')"
          backgroundSize={'cover'}
        >
          test
        </Circle>
      </GridItem>
    </Grid>
  )
}
