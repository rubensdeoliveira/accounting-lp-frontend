import { GetStaticPaths, GetStaticProps } from 'next'
import { Flex } from '@chakra-ui/react'

import { client } from '@/infra/graphql/common/client'
import { normalizeData } from '@/application/helpers'
import {
  getPostByTopicNameQuery,
  getPostsQuery,
} from '@/infra/graphql/posts/queries'
import { Post } from '@/infra/graphql/posts/models'
import { getCategoriesQuery } from '@/infra/graphql/categories/queries'
import { Category } from '@/infra/graphql/categories/models'
import { Sidebar } from '@/application/components/sidebar'
import { Header, Layout } from '@/application/components'
import { MarkdownViewer } from '@/application/components/markdown-viewer'
import { PostNavButton } from '@/application/components/post-nav-button'

type LearnWithMeBySlugProps = {
  post: Post
  categories: Category[]
}

export default function LearnWithMeBySlug({
  post,
  categories,
}: LearnWithMeBySlugProps) {
  return (
    <Layout>
      <Header />
      <Flex w="100%" mt={['3.2rem', '3.2rem', '3.2rem', '0', '0', '0']}>
        <Sidebar menuItems={categories} />
        <Flex flexDirection="column" flex={1}>
          <MarkdownViewer content={post.content} />
          <Flex width={'100%'} gap={'1.6rem'} mt={'6.4rem'} flexWrap="wrap">
            <PostNavButton
              categories={categories}
              post={post}
              type={'previous'}
            />
            <PostNavButton categories={categories} post={post} type={'next'} />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.request(getPostsQuery)
  const normalizedResponse = normalizeData(response.posts.data)

  const paths = normalizedResponse.map((postItem: Post) => ({
    params: { slug: postItem.slug },
  }))

  return {
    fallback: 'blocking',
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsResponse = await client.request(getPostsQuery)
  const postsBySlugResponse = await client.request(
    getPostByTopicNameQuery(params.slug as string),
  )
  const { posts } = normalizeData(postsResponse)
  const { posts: postsBySlug } = normalizeData(postsBySlugResponse)
  if (postsBySlug.length === 0) {
    if (posts.length > 0) {
      return {
        redirect: {
          destination: `/aprenda-comigo/${posts[0].slug}`,
          permanent: false,
        },
      }
    } else {
      return {
        redirect: { destination: '/', permanent: false },
      }
    }
  }
  const categoriesResponse = await client.request(getCategoriesQuery)
  return {
    props: {
      post: postsBySlug[0],
      categories: normalizeData(categoriesResponse.categories.data),
    },
    revalidate: 60 * 10,
  }
}
