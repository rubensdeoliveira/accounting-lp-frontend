import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { CountItemModel } from '@/infra/graphql/home/models'
import { NumberAnimation } from './animations/numbers.animation'

export function CountNumbers({ countNumber, countText }: CountItemModel) {
  return (
    <Flex
      flexDirection="column"
      gap={'0.7rem'}
      margin={['0 auto', '0 auto', '0 auto', '0', '0', '0']}
    >
      <Text
        fontWeight={700}
        fontSize={['4rem', '4rem', '4rem', '5rem', '5rem', '6rem']}
        lineHeight={1.15}
        textAlign="center"
      >
        <NumberAnimation n={countNumber} />
      </Text>
      <Text
        color={'red.500'}
        fontSize={['1.6rem', '1.6rem', '1.6rem', '1.7rem', '1.7rem', '1.8rem']}
        lineHeight={1.66}
        textAlign="center"
        textTransform={'uppercase'}
      >
        {countText}
      </Text>
    </Flex>
  )
}
