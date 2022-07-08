import React, { useState, useMemo, FormEvent, ChangeEvent } from 'react'
import { Grid, Flex, Button, useColorMode, Box, Input } from '@chakra-ui/react'
import { FaCameraRetro } from 'react-icons/fa'
import { apiStrapi } from '../service/apit'
import { signIn } from 'next-auth/react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { FiGithub, FiFacebook } from 'react-icons/fi'

export default function Register() {
  const { colorMode } = useColorMode()
  const [photo, setPhoto] = useState(null)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null
  }, [photo])

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    const data = new FormData()

    data.append('photo', photo!)
    data.append('name', name)
    data.append('username', username)
    data.append('password', password)
    data.append('email', email)

    console.log(data)
    console.log(username)
    console.log(password)
    console.log(photo)
    console.log(preview)
    const response = await apiStrapi.post('api/users', data)
    console.log(response.data)
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Grid
        as="main"
        height="95%"
        width="90%"
        templateColumns={['1fr', '1fr 1fr']}
        templateRows={['23% 74%', '1fr 90% 1fr']}
        templateAreas={["'photo' 'form'", "'. .''photo form' "]}
        justifyItems="center"
        borderRadius="15px"
        backgroundColor="#2d37489e"
      >
        <Flex
          gridArea="photo"
          width={['auto']}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            as="label"
            display="flex"
            rounded="full"
            width={['130px', '130px', '300px', '380px', '400px', '500px']}
            height={['130px', '130px', '300px', '380px', '400px', '500px']}
            backgroundColor="rgba(255, 255, 255, 0.070);"
            backgroundImage={`url(${preview})`}
            backgroundSize="cover"
            border={photo ? 'none' : '3px dashed black'}
            justifyContent="center"
            alignItems="center"
            style={{ backgroundSize: 'cover' }}
            //onClick={clickPhoto}
            cursor="pointer"
          >
            <FaCameraRetro
              style={photo ? { display: 'none' } : { display: 'flex' }}
              size={30}
              cursor="pointer"
            />
            <Input
              type="file"
              onChange={(e: any) => {
                setPhoto(e.target.files[0])
                console.log(e.target.files[0])
              }}
              display="none"
            />
          </Box>
        </Flex>

        <Flex
          gridArea="form"
          width="100%"
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent={['space-between', 'center']}
        >
          <Input
            width="80%"
            height="10%"
            type="text"
            marginBottom={['5px', '20px']}
            placeholder="Seu nome"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Input
            width="80%"
            height="10%"
            type="text"
            marginBottom={['5x', '30px']}
            placeholder="Seu username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <Input
            width="80%"
            height="10%"
            type="text"
            marginBottom={['5px', '30px']}
            placeholder="Seu email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            width="80%"
            height="10%"
            type="text"
            marginBottom={['5px', '30px']}
            placeholder="Sua senha"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <Button
            width="80%"
            height={['40px', '10%']}
            fontSize={18}
            backgroundColor={colorMode === 'light' ? '#0878b9' : '#0c4363'}
            color="white"
            onClick={handleRegister}
            _hover={
              colorMode === 'light'
                ? { backgroundColor: '#186d9e' }
                : { backgroundColor: '#14608c' }
            }
          >
            Register
          </Button>
        </Flex>
      </Grid>
    </Flex>
  )
}
