import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { getWhatWeDoIcon } from './constants'
import { WhatWeDoCardModel } from '@/infra/graphql/home/models'

export function WhatWeDoCard({
  description,
  title,
  iconType,
  link,
  linkText,
}: WhatWeDoCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.400'}
      w={'100%'}
      maxW={'373px'}
      p={'3.2rem'}
      flexDirection="column"
      borderRadius={'10px'}
    >
      <Flex
        bgColor={'red.500'}
        borderRadius={'50%'}
        w={['40px', '40px', '40px', '50px', '50px', '60px']}
        h={['40px', '40px', '40px', '50px', '50px', '60px']}
        alignItems="center"
        justifyContent="center"
        mb={['3.5rem', '3.5rem', '3.5rem', '3.8rem', '3.8rem', '4.1rem']}
        flexShrink={0}
      >
        <Icon
          as={getWhatWeDoIcon(iconType)}
          w={['20px', '20px', '20px', '25px', '25px', '30px']}
          h={['20px', '20px', '20px', '25px', '25px', '30px']}
        />
      </Flex>
      <Text
        mb={'1.6rem'}
        fontWeight={500}
        fontSize={['1.7rem', '1.7rem', '1.7rem', '2rem', '2rem', '2.3rem']}
        lineHeight={1.3}
        noOfLines={1}
      >
        {title}
      </Text>
      <Text
        fontSize={['1.2rem', '1.2rem', '1.2rem', '1.4rem', '1.4rem', '1.6rem']}
        lineHeight={1.75}
        mb={'1.8rem'}
        noOfLines={3}
      >
        {description}
      </Text>
      <Link display={'flex'} alignItems="center" gap={'0.8rem'} href={link}>
        <Text
          fontWeight={500}
          fontSize={[
            '1.2rem',
            '1.2rem',
            '1.2rem',
            '1.4rem',
            '1.4rem',
            '1.6rem',
          ]}
          lineHeight={1.75}
          noOfLines={1}
        >
          {linkText}
        </Text>
        <Icon
          as={FiArrowRight}
          w={['1.6rem', '1.6rem', '1.6rem', '2rem', '2rem', '2.4rem']}
          h={['1.6rem', '1.6rem', '1.6rem', '2rem', '2rem', '2.4rem']}
        />
      </Link>
    </Flex>
  )
}
