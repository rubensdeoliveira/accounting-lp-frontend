import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { CallToActionSectionModel } from '@/infra/graphql/home/models'
import { Button } from '@/application/components'

export function CallToActionSection({
  title,
  button,
}: CallToActionSectionModel) {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={'2rem'}
      bgColor={'gray.400'}
      px={['4.8rem', '4.8rem', '4.8rem', '6rem', '6rem', '7.8rem']}
      py={['4.6rem', '4.6rem', '4.6rem', '5.8rem', '5.8rem', '7.6rem']}
      justifyContent={'space-between'}
      alignItems="center"
      borderRadius={'10px'}
      as="section"
      flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
    >
      <Text
        fontWeight={600}
        fontSize={['2.8rem', '2.8rem', '2.8rem', '3rem', '3rem', '3.4rem']}
        lineHeight={1.3}
        maxWidth={'415px'}
        noOfLines={1}
      >
        {title}
      </Text>
      <Button link={button.link}>{button.label}</Button>
    </Flex>
  )
}
