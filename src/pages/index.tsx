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
import { v4 as uuidv4 } from 'uuid'

import { FaDog, FaSignInAlt } from 'react-icons/fa'
import { FiGithub, FiLock, FiUser } from 'react-icons/fi'
import { getSession, signIn, useSession } from 'next-auth/react'
import SocialLogin from '../components/Login/SocialLogin'
import { api, apiStrapi } from '../service/apit'

interface iUser {
  email: string
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (session) {
    console.log(session)
    console.log('foiii')
    const getUsers = await apiStrapi.get('/api/users')
    console.log(getUsers.data)
    const result = getUsers.data.find(
      (user: iUser) => user.email === `${session?.user?.email}`
    )
    if (!result) {
      const username = `${session?.user?.name}-${uuidv4()}`
      const data = {
        name: `${session?.user?.name}`,
        email: `${session?.user?.email}`,
        photo: `${session?.user?.image}`,
        username,
        password: uuidv4()
      }
      const response = await apiStrapi.post('api/users', data)
      console.log(response.data)
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

  async function CreateUserWithSocial() {
    const { data: session } = useSession()
  }

  async function search() {
    const response = await api.get('/products/1')
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
            <Link href={'/register'}>Não tenho cadastro</Link>
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
