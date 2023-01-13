import { Post } from '../../posts/models'

export type Category = {
  name: string
  slug: string
  posts: Post[]
}

export type CategoriesQueryModel = {
  categories: Category[]
}
