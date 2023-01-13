import { TestimonialCardModel } from '@/infra/graphql/home/models'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export function TestimonialCard({
  description,
  job,
  name,
  photo,
}: TestimonialCardModel) {
  return (
    <Flex
      maxW={'373px'}
      w={'100%'}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={'3.4rem'}
      py={'4.1rem'}
      bgColor={'gray.400'}
      borderRadius={'10px'}
    >
      <Image src={'/imgs/quote.svg'} alt="Quote" width={60} height={44} />
      <Text
        lineHeight={1.6}
        fontSize={[
          '1.4rem',
          '1.4rem',
          '1.4rem',
          '1.55rem',
          '1.55rem',
          '1.7rem',
        ]}
        textAlign="center"
        mt={'2.9rem'}
        fontStyle="italic"
        noOfLines={3}
      >
        {description}
      </Text>
      <Avatar
        name={name}
        src={photo?.url}
        w={['60px', '60px', '60px', '75px', '75px', '90px']}
        h={['60px', '60px', '60px', '75px', '75px', '90px']}
        mt={'2.1rem'}
        size={['xl', 'xl', 'xl', '2xl', '2xl', '2xl']}
      />
      <Text
        lineHeight={1.6}
        fontSize={['1.4rem', '1.4rem', '1.4rem', '1.6rem', '1.6rem', '1.8rem']}
        fontWeight={500}
        textAlign="center"
        mt="1.7rem"
        noOfLines={1}
      >
        {name}
      </Text>
      <Text
        fontSize={['1.2rem', '1.2rem', '1.2rem', '1.4rem', '1.4rem', '1.6rem']}
        lineHeight={1.75}
        fontWeight={300}
        textAlign="center"
        noOfLines={1}
      >
        {job}
      </Text>
    </Flex>
  )
}
