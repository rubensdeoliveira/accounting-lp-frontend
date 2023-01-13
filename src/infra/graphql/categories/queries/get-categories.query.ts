import { gql } from 'graphql-request'

export const getCategoriesQuery = gql`
  query {
    categories(sort: "orderNum") {
      data {
        attributes {
          name
          slug
          posts(sort: "orderNum") {
            data {
              attributes {
                topic
                slug
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
      }
    }
  }
`
