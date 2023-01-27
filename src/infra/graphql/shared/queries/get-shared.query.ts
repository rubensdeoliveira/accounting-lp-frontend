import { gql } from 'graphql-request'

export const getSharedQuery = gql`
  fragment GetHeader on Shared {
    header {
      logo {
        data {
          attributes {
            url
          }
        }
      }
      logoDark {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment GetFooter on Shared {
    footer {
      title1
      title2
      iconButtonLinks {
        id
        iconType
        link
      }
      contactLinks {
        id
        iconType
        text
        link
      }
      description
    }
  }

  query {
    shared {
      data {
        attributes {
          ...GetHeader
          ...GetFooter
        }
      }
    }
  }
`
