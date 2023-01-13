import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { SectionInfoModel } from './models'

export function SectionInfo({ title, description }: SectionInfoModel) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w={'100%'}
      flexDirection="column"
      gap={['1.4rem', '1.4rem', '1.4rem', '1.8rem', '1.8rem', '2.2rem']}
    >
      <Text
        fontWeight={600}
        fontSize={['2.6rem', '2.6rem', '2.6rem', '3rem', '3rem', '3.4rem']}
        lineHeight={1.3}
        mb="0.2rem"
        textTransform={'uppercase'}
        textAlign="center"
      >
        {title}
      </Text>
      <Box width={'100px'} height={'2px'} bgColor="red.500" />
      <Text
        fontSize={['1.2rem', '1.2rem', '1.2rem', '1.4rem', '1.4rem', '1.6rem']}
        lineHeight={1.75}
        maxWidth={'570px'}
        textAlign="center"
      >
        {description}
      </Text>
    </Flex>
  )
}
