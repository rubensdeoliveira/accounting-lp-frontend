import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { HeroSectionModel } from '@/infra/graphql/home/models'
import { Button } from '@/application/components'

export function HeroSection({
  button,
  description,
  devApresentation,
  devImage,
  title,
}: HeroSectionModel) {
  return (
    <Flex
      alignItems={['center', 'center', 'center', 'center', 'center', 'center']}
      justifyContent="space-between"
      as="section"
      gap={'3rem'}
      flexWrap="wrap"
      flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
      px={['2rem', '2rem', '2rem', '2rem', '2rem', '0']}
    >
      <Flex
        flexDirection="column"
        flex={1}
        maxWidth={['472px', '472px', '472px', '570px', '570px', '570px']}
      >
        <Text
          color={'red.500'}
          fontSize={['1.4rem', '1.4rem', '1.4rem', '1.7rem', '1.7rem', '2rem']}
          lineHeight={1.4}
          fontWeight={500}
          mb={'1.1rem'}
        >
          {devApresentation}
        </Text>
        <Text
          fontSize={['3rem', '3rem', '3rem', '3.7rem', '3.7rem', '4.4rem']}
          lineHeight={1.45}
          fontWeight={700}
          mb={'2.1rem'}
        >
          {title}
        </Text>
        <Text
          fontSize={[
            '1.2rem',
            '1.2rem',
            '1.2rem',
            '1.5rem',
            '1.5rem',
            '1.8rem',
          ]}
          lineHeight={1.55}
          mb={'3.1rem'}
        >
          {description}
        </Text>
        <Button link={button.link}>{button.label}</Button>
      </Flex>
      <Flex
        w={['100%', '100%', '100%', '50%', '50%', '50%']}
        maxWidth={472}
        position="relative"
        mt={['2rem', '2rem', '2rem', '0', '0', '0']}
      >
        <Image
          alt="Bolinhas vermelhas"
          src={'/imgs/red-balls.svg'}
          width={84}
          height={127}
          style={{
            position: 'absolute',
            zIndex: -1,
            top: '-22px',
            right: '-25px',
          }}
        />
        <Image
          alt="Rubens Junior"
          src={devImage.url}
          width={472}
          height={584}
        />
        <Box
          position={'absolute'}
          width={'100%'}
          height={'100%'}
          bottom={'-20px'}
          left={'-20px'}
          zIndex={-1}
          bgColor={'gray.400'}
        ></Box>
      </Flex>
    </Flex>
  )
}
