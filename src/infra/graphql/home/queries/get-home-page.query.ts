import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  fragment GetHero on Home {
    hero {
      devApresentation
      title
      description
      button {
        label
        link
      }
      devImage {
        data {
          attributes {
            url
            width
            height
          }
        }
      }
    }
  }

  fragment GetWhatWeDo on Home {
    whatWeDo {
      sectionHeader {
        title
        description
      }
      whatWeDoCards {
        id
        title
        description
        linkText
        link
        iconType
      }
    }
  }

  fragment GetExperience on Home {
    experience {
      sectionHeader {
        title
        description
      }
      experienceCards {
        job
        company
        description
        id
      }
      experienceBars {
        language
        experienceLevel
        id
      }
    }
  }

  fragment GetCountInNumbers on Home {
    countInNumbers {
      sectionHeader {
        title
        description
      }
      countItems {
        countNumber
        countText
        id
      }
    }
  }

  fragment GetTestimonials on Home {
    testimonials {
      sectionHeader {
        title
        description
      }
      testimonialCards {
        id
        description
        photo {
          data {
            attributes {
              url
            }
          }
        }
        name
        job
      }
    }
  }

  fragment GetCallToAction on Home {
    callToAction {
      title
      button {
        label
        link
      }
    }
  }

  fragment GetContact on Home {
    contact {
      contactCards {
        contactText
        contactType
        id
      }
    }
  }

  fragment GetFooter on Home {
    footer {
      title
      footerInfoTextLinks {
        text
        link
        id
      }
      footerInfoIconLinks {
        iconType
        link
        id
      }
    }
  }

  query {
    home {
      data {
        attributes {
          ...GetHero
          ...GetWhatWeDo
          ...GetExperience
          ...GetCountInNumbers
          ...GetTestimonials
          ...GetCallToAction
          ...GetContact
          ...GetFooter
        }
      }
    }
  }
`
