import { Flex } from '@chakra-ui/react'
import React from 'react'

import { LayoutModel } from './models'

export function Layout({ children }: LayoutModel) {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      maxWidth={'1160px'}
      mx="auto"
      px={['1.6rem', '1.6rem', '2.4rem', '2.4rem', '2.4rem', '0']}
    >
      {children}
    </Flex>
  )
}
