import {
  Grid,
  Flex,
  Heading,
  Input,
  Button,
  Box,
  Center,
  Divider
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'

import { FaDog, FaSignInAlt } from 'react-icons/fa'
import { FiGithub, FiLock, FiUser } from 'react-icons/fi'
import { getSession, signIn } from 'next-auth/react'
import SocialLogin from '../components/Login/SocialLogin'
import { api } from '../service/apit'

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)
  console.log(session)
  if (session) {
    return {
      redirect: {
        destination: '/home',
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

const Home: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //sm, md,lg,xl, 2xl

  async function search() {
    const response = await api.get('/products/1')
    console.log(response.data)
  }

  useEffect(() => {
    search()
  }, [])
  return (
    <Center h={'100vh'} width="100%">
      <Flex
        width={['85%', '70%', '85%', '80%', '90%']}
        height={['100%', '50%', '60%', '45%', '70%']}
        flexDirection={['column', 'column', 'row', 'row']}
        padding="5px"
        paddingTop={'20px'}
        alignItems="center"
        justifyContent="space-around"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={['100%', 'initial', '50%', '40%', '30%']}
          h={['50%', 'initial', '80%']}
        >
          <Heading color="white">Faça seu Login</Heading>

          <Input
            placeholder="Username"
            height="60px"
            size="md"
            marginTop="30px"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />

          <Input
            placeholder="Password"
            marginTop="25px"
            height="60px"
            size="md"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <Button
            marginTop="30px"
            width="100%"
            height={['13%', 'initial', '15%', '15%']}
            fontSize={20}
            color="white"
            style={{
              backgroundImage:
                'linear-gradient(to right top, #2a384e, #2e546c, #2f7285, #3a9098, #56afa4)'
            }}
          >
            Entrar
          </Button>

          <Flex
            alignItems="center"
            justifyContent="center"
            marginTop="30px"
            fontWeight="bold"
            width="100%"
            color="white"
          >
            <FaSignInAlt
              size={25}
              color="#e9e6e6"
              style={{ cursor: 'pointer', marginRight: 10 }}
            />
            Não tenho cadastro
          </Flex>
        </Flex>

        <Divider display={['initial', 'initial', 'none']} />
        <Divider display={['none', 'none', 'initial']} orientation="vertical" />
        <SocialLogin />
      </Flex>
    </Center>
  )
}

export default Home
