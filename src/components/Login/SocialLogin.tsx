import { Box, Button, Flex } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { FiGithub, FiFacebook } from 'react-icons/fi'
import { AiFillGoogleCircle } from 'react-icons/ai'

export default function SocialLogin() {



  return (
    <Flex
      flexDirection="column"
      justifyContent={'space-between'}
      alignItems="center"
      h={['20%', 'initial', '40%']}
    >
      <Button
        backgroundColor={'transparent'}
        marginLeft={'20px'}
        leftIcon={<FiGithub />}
        _hover={{ backgroundColor: 'gray.700' }}
        onClick={() => signIn('github')}
        border="3px solid #0987A0"
        w={'100%'}
        h={['initial', 'initial', '25%']}
      >
        Entre com Github
      </Button>
      <Button
        backgroundColor={'transparent'}
        marginLeft={'20px'}
        leftIcon={<FiFacebook />}
        _hover={{ backgroundColor: 'gray.700' }}
        onClick={() => signIn('github')}
        border="3px solid #0987A0"
        w={'100%'}
        h={['initial', 'initial', '25%']}
      >
        Entre com Facebook
      </Button>
      <Button
        backgroundColor={'transparent'}
        marginLeft={'20px'}
        leftIcon={<AiFillGoogleCircle />}
        _hover={{ backgroundColor: 'gray.700' }}
        onClick={() => signIn('github')}
        border="3px solid #0987A0"
        w={'100%'}
        h={['initial', 'initial', '25%']}
      >
        Entre com Google
      </Button>
    </Flex>
  )
}
