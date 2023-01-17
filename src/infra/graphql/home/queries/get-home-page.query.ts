import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  fragment GetHero on Home {
    hero {
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
          ...GetWhyChooseUs
          ...GetFooter
        }
      }
    }
  }
`
