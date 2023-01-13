export type HeroSectionModel = {
  devApresentation: string
  title: string
  description: string
  button: {
    label: string
    link: string
  }
  devImage: {
    url: string
    width: number
    height: number
  }
}

export type WhatWeDoCardModel = {
  title: string
  description: string
  linkText: string
  link: string
  iconType: string
  id: string
}

export type WhatWeDoSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  whatWeDoCards: WhatWeDoCardModel[]
}

export type ExperienceCardModel = {
  job: string
  company: string
  description: string
  id: string
}

export type ExperienceBarModel = {
  language: string
  experienceLevel: number
  id: string
}

export type ExperienceSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  experienceCards: ExperienceCardModel[]
  experienceBars: ExperienceBarModel[]
}

export type CountItemModel = {
  countNumber: number
  countText: string
  id: string
}

export type CountInNumbersSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  countItems: CountItemModel[]
}

export type TestimonialCardModel = {
  description: string
  photo?: {
    url: string
  }
  name: string
  job: string
  id: string
}

export type TestimonialsSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  testimonialCards: TestimonialCardModel[]
}

export type CallToActionSectionModel = {
  title: string
  button: {
    label: string
    link: string
  }
}

export type ContactCardModel = {
  contactText: string
  contactType: string
  id: string
}

export type ContactSectionModel = {
  contactCards: ContactCardModel[]
}

export type FooterSectionModel = {
  title: string
  footerInfoTextLinks: Array<{
    text: string
    link: string
    id: string
  }>
  footerInfoIconLinks: Array<{
    iconType: string
    link: string
    id: string
  }>
}

export type HomePageQueryModel = {
  hero: HeroSectionModel
  whatWeDo: WhatWeDoSectionModel
  experience: ExperienceSectionModel
  countInNumbers: CountInNumbersSectionModel
  testimonials: TestimonialsSectionModel
  callToAction: CallToActionSectionModel
  contact: ContactSectionModel
  footer: FooterSectionModel
}
