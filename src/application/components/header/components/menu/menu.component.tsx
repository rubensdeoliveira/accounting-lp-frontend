import React, { useEffect, useState } from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const { asPath } = useRouter()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Aprenda Comigo', path: '/aprenda-comigo/get-posts' },
  ]

  useEffect(() => {
    const asPathRouteParts = asPath.split('/')
    const asPathRoutePartsWithBar = asPathRouteParts.map(
      asPathItem => `/${asPathItem}`,
    )
    setSelectedMenu(
      menuItems.find(menuItem => {
        console.log(asPathRoutePartsWithBar[1])
        return (
          menuItem.path !== '/' &&
          asPathRoutePartsWithBar.length > 0 &&
          menuItem.path.includes(asPathRoutePartsWithBar[1])
        )
      }),
    )
  }, [asPath])

  return (
    <Flex
      alignItems="center"
      gap={['1.6rem', '1.6rem', '1.6rem', '4.6rem', '4.6rem', '4.6rem']}
    >
      {menuItems.map(menuItem => {
        console.log(selectedMenu)
        const isSelected =
          selectedMenu?.path === menuItem.path ||
          (menuItem.path === '/' && asPath === '/')
        return (
          <Link key={menuItem.label} href={menuItem.path}>
            <Text
              fontSize={[
                '1.4rem',
                '1.4rem',
                '1.4rem',
                '1.6rem',
                '1.6rem',
                '1.6rem',
              ]}
              lineHeight={1.2}
              fontWeight={500}
              color={isSelected ? 'red.500' : 'white'}
            >
              {menuItem.label}
            </Text>
          </Link>
        )
      })}
    </Flex>
  )
}
