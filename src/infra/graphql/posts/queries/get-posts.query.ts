import { gql } from 'graphql-request'

export const getPostsQuery = gql`
  query {
    posts(sort: ["category.orderNum", "orderNum"]) {
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
