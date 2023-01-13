import React, { useMemo } from 'react'
import { Icon, Link, Text } from '@chakra-ui/react'

import { PostNavButtonModel } from './models'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Post } from '@/infra/graphql/posts/models'

export function PostNavButton({ type, post, categories }: PostNavButtonModel) {
  const postToNavigate = useMemo((): Post | undefined => {
    if (type === 'next') {
      const postCategory = categories.find(
        category => category.name === post.category.name,
      )
      if (postCategory) {
        const postIndexInCategory = postCategory.posts.findIndex(
          p => p.slug === post.slug,
        )
        if (postIndexInCategory < postCategory.posts.length - 1) {
          return postCategory.posts[postIndexInCategory + 1]
        } else {
          const postCategoryIndex = categories.findIndex(
            c => c.slug === postCategory.slug,
          )
          if (postCategoryIndex < categories.length - 1) {
            return categories[postCategoryIndex + 1].posts[0]
          }
        }
      }
    } else {
      const postCategory = categories.find(
        category => category.name === post.category.name,
      )
      if (postCategory) {
        const postIndexInCategory = postCategory.posts.findIndex(
          p => p.slug === post.slug,
        )
        if (postIndexInCategory > 0) {
          return postCategory.posts[postIndexInCategory - 1]
        } else {
          const postCategoryIndex = categories.findIndex(
            c => c.slug === postCategory.slug,
          )
          if (postCategoryIndex > 0) {
            const categoryPosts = categories[postCategoryIndex - 1].posts
            return categoryPosts[categoryPosts.length - 1]
          }
        }
      }
    }
  }, [post, categories, type])

  return postToNavigate ? (
    <Link
      href={`/aprenda-comigo/${postToNavigate.slug}`}
      marginLeft={type === 'next' ? 'auto' : undefined}
      fontSize={'1.8rem'}
      fontWeight={700}
      lineHeight={1.5}
      color={'red.500'}
      display="flex"
      alignItems={'center'}
      gap={'0.4rem'}
    >
      <Text order={type === 'next' ? 1 : 2}>{postToNavigate.topic}</Text>
      <Icon
        as={type === 'next' ? FiChevronRight : FiChevronLeft}
        w={'2rem'}
        h={'2rem'}
        order={type === 'next' ? 2 : 1}
      />
    </Link>
  ) : null
}
