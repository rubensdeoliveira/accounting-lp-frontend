import { gql } from 'graphql-request'

export const getPostByTopicNameQuery = (slug: string) => gql`
  query {
    posts(filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          topic
          slug
          content
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
