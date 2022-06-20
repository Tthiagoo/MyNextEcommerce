import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  useDisclosure
} from '@chakra-ui/react'
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa'
import ModalCart from './ModalCart'
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  return (
    <>
      <Modal isOpen={isOpen} size={sizes} onClose={onClose}>
        <ModalCart />
      </Modal>

      <GridItem
        p={'4%'}
        display={'flex'}
        flexDirection="column"
        area={'header'}
      >
        <Flex justifyContent={'end'} alignItems={'center'} w={'100%'} h={'50%'}>
          <Icon marginX={'20px'} as={FaHeart} w={7} h={7} />
          <Icon
            onClick={onOpen}
            marginX={'20px'}
            as={FaShoppingCart}
            w={7}
            h={7}
          />

          <Avatar
            size={'md'}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </Flex>
        <Flex w={'100%'} marginTop="10px" h={'50%'}>
          <InputGroup borderRadius={'10px'}>
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input
              type="text"
              backgroundColor="gray.700"
              placeholder="Search"
            />
          </InputGroup>
        </Flex>
      </GridItem>
    </>
  )
}
