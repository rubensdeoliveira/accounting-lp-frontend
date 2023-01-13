import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { ContactCardModel } from '@/infra/graphql/home/models'
import { getContactIcon } from './constants'

export function ContactCard({ contactText, contactType }: ContactCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.500'}
      w="100%"
      maxWidth={'373px'}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={'3.3rem'}
      borderRadius={'10px'}
    >
      <Flex
        bgColor={'red.500'}
        borderRadius={'50%'}
        w={['36px', '36px', '36px', '45px', '45px', '50px']}
        h={['36px', '36px', '36px', '45px', '45px', '50px']}
        alignItems="center"
        justifyContent="center"
        mb={'2.4rem'}
        flexShrink={0}
      >
        <Icon
          as={getContactIcon(contactType)}
          w={['24px', '24px', '24px', '27px', '27px', '30px']}
          h={['24px', '24px', '24px', '27px', '27px', '30px']}
        />
      </Flex>
      <Text
        fontSize={['1.4rem', '1.4rem', '1.4rem', '1.6rem', '1.6rem', '1.8rem']}
        lineHeight={1.2}
        textAlign="center"
        noOfLines={1}
      >
        {contactText}
      </Text>
    </Flex>
  )
}
