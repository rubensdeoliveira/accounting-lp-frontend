export type Post = {
  topic: string
  slug: string
  content: string
  category: {
    name: string
  }
}

export type PostQueryModel = {
  posts: Post[]
}
