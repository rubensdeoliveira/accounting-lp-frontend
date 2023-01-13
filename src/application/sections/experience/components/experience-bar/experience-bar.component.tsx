import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { ExperienceBarModel } from '@/infra/graphql/home/models'

export function ExperienceBar({
  experienceLevel,
  language,
}: ExperienceBarModel) {
  return (
    <Flex
      w="100%"
      maxWidth={['373px', '373px', '373px', '571px', '571px', '571px']}
      flexDirection={'column'}
      gap={'1.2rem'}
    >
      <Text
        lineHeight={1.6}
        fontSize={['1.4rem', '1.4rem', '1.4rem', '1.6rem', '1.6rem', '1.8rem']}
      >
        {language}
      </Text>
      <Box
        w={'100%'}
        h={['16px', '16px', '16px', '20px', '20px', '20px']}
        bgColor={'gray.500'}
      >
        <Box w={`${experienceLevel * 20}%`} h={'100%'} bgColor={'red.500'} />
      </Box>
    </Flex>
  )
}
