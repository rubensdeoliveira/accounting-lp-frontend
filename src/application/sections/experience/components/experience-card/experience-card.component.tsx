import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { ExperienceCardModel } from '@/infra/graphql/home/models'

export function ExperienceCard({
  company,
  description,
  job,
}: ExperienceCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.400'}
      w={'100%'}
      maxW={'373px'}
      flexDirection="column"
      p={'3.2rem'}
    >
      <Text
        color={'red.500'}
        fontSize={['1.2rem', '1.2rem', '1.2rem', '1.4rem', '1.4rem', '1.6rem']}
        lineHeight={1.25}
        textTransform="uppercase"
        mb={'1.5rem'}
        noOfLines={1}
      >
        {job}
      </Text>
      <Text
        textTransform="uppercase"
        fontWeight={500}
        fontSize={['1.8rem', '1.8rem', '1.8rem', '2rem', '2rem', '2.2rem']}
        lineHeight={1.2}
        mb={'1.9rem'}
        noOfLines={1}
      >
        {company}
      </Text>
      <Text
        fontSize={['1.2rem', '1.2rem', '1.2rem', '1.4rem', '1.4rem', '1.6rem']}
        lineHeight={1.75}
        noOfLines={3}
      >
        {description}
      </Text>
    </Flex>
  )
}
