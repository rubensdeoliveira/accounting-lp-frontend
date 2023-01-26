import { gql } from 'graphql-request'

export const getOurServicesPageQuery = gql`
  fragment GetWhyChooseUs on OurService {
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
    ourService {
      data {
        attributes {
          ...GetWhyChooseUs
        }
      }
    }
  }
`
