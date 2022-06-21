import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'

export default function Promo() {
  return (
    <GridItem area={'promo'} marginTop="10px" marginBottom={'10px'} px="15px">
      <Grid
        h="100%"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={2}
          backgroundImage="url('/promo1.jpg')"
          borderRadius="10px"
          colSpan={2}
          backgroundSize={'cover'}
        >
          <Box bgColor="rgba(0, 0, 0, 0.445)" p="10px" w="100%" h="100%">
            <VStack h="100%" w="100%">
              <Heading size="md">All dressed</Heading>
              <Text>
                Dress that feels a little fany for when pajamas aren’t cutting
                it
              </Text>
              <Button
                width="70%"
                height={['15%', 'initial', '15%', '15%']}
                fontSize={15}
                color="white"
                backgroundColor={'blue.500'}
              >
                Buy Now
              </Button>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={2} borderRadius="10px" bg="papayawhip" />
        <GridItem colSpan={2} borderRadius="10px" bg="papayawhip" />
      </Grid>
    </GridItem>
  )
}
