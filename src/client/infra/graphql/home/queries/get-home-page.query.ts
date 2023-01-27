import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  fragment GetHero on Home {
    hero {
      image {
        data {
          attributes {
            url
          }
        }
      }
      title
      description
      subtitle
      button {
        label
        link
      }
    }
  }

  fragment GetWhyChooseUs on Home {
    whyChooseUs {
      sectionInfo {
        title
        subtitle
        description
      }
      whyChooseUsCards {
        id
        iconType
        title
        description
        buttonText
        buttonLink
      }
    }
  }

  query {
    home {
      data {
        attributes {
          ...GetHero
          ...GetWhyChooseUs
        }
      }
    }
  }
`
