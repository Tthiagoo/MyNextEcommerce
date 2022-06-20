import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'

import React from 'react'
import Cart from './Cart'

export default function ModalCart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  return (
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <Cart />
      </ModalBody>
    </ModalContent>
  )
}
