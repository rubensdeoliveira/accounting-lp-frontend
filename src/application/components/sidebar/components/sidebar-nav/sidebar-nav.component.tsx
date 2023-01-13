import { Category } from '@/infra/graphql/categories/models'
import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { SidebarNavModel } from './models'

export function SidebarNav({ menuItems }: SidebarNavModel) {
  const { asPath } = useRouter()

  const [categoryShow, setCategoryShow] = useState<Category | null>(
    menuItems.find(mi => mi.posts.find(post => asPath.includes(post.slug))),
  )

  const handleChangeCategoryShow = useCallback((newCategory: Category) => {
    setCategoryShow(oldValue => (oldValue === newCategory ? null : newCategory))
  }, [])

  const handlePostMenuItems = useMemo(
    () =>
      menuItems.map(menuItem => (
        <Box key={menuItem.slug} width={'100%'}>
          <Text
            fontWeight="bold"
            color="red.500"
            fontSize={'1.2rem'}
            letterSpacing={'0.06rem'}
            onClick={() => handleChangeCategoryShow(menuItem)}
            display="flex"
            alignItems="center"
            gap={'0.8rem'}
            cursor="pointer"
          >
            {menuItem.name.toUpperCase()}
            <Icon
              as={categoryShow === menuItem ? FiChevronUp : FiChevronDown}
              w={'18px'}
              h={'18px'}
            />
          </Text>
          {menuItem.posts.length > 0 && (
            <Stack
              spacing={'0.8rem'}
              mt={'1.6rem'}
              align="stretch"
              width={'100%'}
            >
              {menuItem.posts.map(post => {
                const isSelected = asPath.includes(post.slug)
                return categoryShow?.name === menuItem.name ? (
                  <Box
                    key={post.topic}
                    borderRadius={'8px'}
                    bgColor={isSelected ? 'gray.500' : undefined}
                    px={'1.2rem'}
                    _hover={{ bgColor: 'gray.500' }}
                  >
                    <Link
                      href={`/aprenda-comigo/${post.slug}`}
                      display="flex"
                      alignItems="center"
                    >
                      <Text
                        fontWeight={isSelected ? 600 : 500}
                        fontSize={'1.4rem'}
                        lineHeight={'3rem'}
                      >
                        {post.topic}
                      </Text>
                    </Link>
                  </Box>
                ) : null
              })}
            </Stack>
          )}
        </Box>
      )),
    [menuItems, categoryShow, handleChangeCategoryShow],
  )

  return (
    <Stack spacing={'3.2rem'} align="flex-start">
      {handlePostMenuItems}
    </Stack>
  )
}
