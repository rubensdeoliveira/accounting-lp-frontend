import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  fragment GetHero on Home {
    hero {
      title
      description
      button {
        label
        link
      }
    }
  }

  fragment GetFooter on Home {
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
    home {
      data {
        attributes {
          ...GetHero
          ...GetFooter
        }
      }
    }
  }
`
