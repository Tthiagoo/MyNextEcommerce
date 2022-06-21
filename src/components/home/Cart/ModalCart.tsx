import { ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

import React from 'react'
import Cart from '.'

export default function ModalCart() {
  return (
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <Cart />
      </ModalBody>
    </ModalContent>
  )
}
