import React, { useMemo } from 'react'
import { Flex, Icon, Image, Link, Text } from '@chakra-ui/react'

import { FooterSectionModel } from '@/infra/graphql/home/models'
import { getFooterIcon } from './constants'

export function FooterSection({
  title,
  footerInfoIconLinks,
  footerInfoTextLinks,
}: FooterSectionModel) {
  const renderInfoTextLinks = useMemo(
    () =>
      footerInfoTextLinks.map(footerInfoTextLink => (
        <Link key={footerInfoTextLink.id} href={footerInfoTextLink.link}>
          <Text
            fontSize={[
              '1.2rem',
              '1.2rem',
              '1.2rem',
              '1.4rem',
              '1.4rem',
              '1.6rem',
            ]}
            lineHeight={1.75}
            fontWeight={400}
            color={'gray.100'}
          >
            {footerInfoTextLink.text}
          </Text>
        </Link>
      )),
    [footerInfoTextLinks],
  )

  const renderInfoIconLinks = useMemo(
    () =>
      footerInfoIconLinks.map(footerInfoIconLink => (
        <Link key={footerInfoIconLink.id} href={footerInfoIconLink.link}>
          <Flex
            bgColor={'gray.400'}
            borderRadius={'50%'}
            w={['38px', '38px', '38px', '42px', '42px', '46px']}
            h={['38px', '38px', '38px', '42px', '42px', '46px']}
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Icon
              as={getFooterIcon(footerInfoIconLink.iconType)}
              w={['2rem', '2rem', '2rem', '2.2rem', '2.2rem', '2.4rem']}
              h={['2rem', '2rem', '2rem', '2.2rem', '2.2rem', '2.4rem']}
            />
          </Flex>
        </Link>
      )),
    [footerInfoIconLinks],
  )

  return (
    <Flex
      bgColor={'gray.900'}
      as="footer"
      w={'100%'}
      px={['16px', '16px', '24px', '24px', '24px', '0']}
      pt={['7rem', '7rem', '7rem', '9rem', '9rem', '11.4rem']}
      pb={['9rem', '9rem', '9rem', '12rem', '12rem', '15.6rem']}
      justifyContent="center"
      alignItems="center"
      flexDirection={'column'}
      position="relative"
      overflow={'hidden'}
    >
      <Text
        fontSize={['1.6rem', '1.6rem', '1.6rem', '1.8rem', '1.8rem', '2rem']}
        lineHeight={1.5}
        fontWeight={500}
        mb={'2.9rem'}
      >
        {title}
      </Text>
      <Flex flexDirection="column" gap={'1.5rem'}>
        {renderInfoTextLinks}
      </Flex>
      <Flex gap={'2.7rem'} mt={'5.8rem'}>
        {renderInfoIconLinks}
      </Flex>
      <Image
        alt="Poligonos"
        src={'/imgs/poligons.svg'}
        position={'absolute'}
        bottom={['-1000px', '-1000px', '-100px', '-75px', '-50px', '-25px']}
        right={['-1000px', '-1000px', '-100px', '-75px', '-50px', '-25px']}
      />
    </Flex>
  )
}
