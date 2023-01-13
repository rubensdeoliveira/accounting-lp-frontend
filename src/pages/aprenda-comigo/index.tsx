import { GetServerSideProps } from 'next'

import { client } from '@/infra/graphql/common/client'
import { normalizeData } from '@/application/helpers'
import { getPostsQuery } from '@/infra/graphql/posts/queries'

export default function LearnWithMe() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const postsResponse = await client.request(getPostsQuery)
  const { posts } = normalizeData(postsResponse)
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
