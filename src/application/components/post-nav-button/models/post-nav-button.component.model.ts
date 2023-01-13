import { Category } from '@/infra/graphql/categories/models'
import { Post } from '@/infra/graphql/posts/models'

export type PostNavButtonModel = {
  type: 'previous' | 'next'
  post: Post
  categories: Category[]
}
