import React from 'react'
import { Button as ChakraButton, Link, Text } from '@chakra-ui/react'

import { ButtonModel } from './models'

export function Button({ children, link, ...rest }: ButtonModel) {
  return (
    <Link href={link}>
      <ChakraButton
        {...rest}
        bgColor={'red.500'}
        borderRadius={'4px'}
        px={['3.4rem', '3.4rem', '3.4rem', '3.8rem', '3.8rem', '4.2rem']}
        py={['1.4rem', '1.4rem', '1.4rem', '1.6rem', '1.6rem', '1.8rem']}
        h={['44px', '44px', '44px', '50px', '50px', '56px']}
        _hover={{ bgColor: 'red.500.lighten' }}
      >
        <Text
          fontSize={[
            '1.2rem',
            '1.2rem',
            '1.2rem',
            '1.4rem',
            '1.4rem',
            '1.6rem',
          ]}
          lineHeight={1.25}
          fontWeight={400}
        >
          {children}
        </Text>
      </ChakraButton>
    </Link>
  )
}
