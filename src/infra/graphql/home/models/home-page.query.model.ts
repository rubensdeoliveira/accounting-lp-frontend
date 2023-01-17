export type HeroQueryModel = {
  title: string
  description: string
  subtitle: string
  button: {
    label: string
    link: string
  }
}

export type WhyChooseUsCardQueryModel = {
  id: string
  iconType: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export type WhyChooseUsQueryModel = {
  sectionInfo: {
    title: string
    subtitle: string
    description: string
  }
  whyChooseUsCards: WhyChooseUsCardQueryModel[]
}

export type IconButtonLinksQueryModel = {
  id: string
  iconType: string
  link: string
}

export type ContactLinksQueryModel = {
  id: string
  iconType: string
  text: string
  link: string
}

export type FooterQueryModel = {
  title1: string
  title2: string
  iconButtonLinks: IconButtonLinksQueryModel[]
  contactLinks: ContactLinksQueryModel[]
  description: string
}

export type HomeQueryModel = {
  hero: HeroQueryModel
  whyChooseUs: WhyChooseUsQueryModel
  footer: FooterQueryModel
}
