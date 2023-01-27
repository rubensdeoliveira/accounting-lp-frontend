export type HeroQueryModel = {
  title: string
  description: string
  subtitle: string
  image: {
    url: string
  }
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
    title?: string
    subtitle: string
    description: string
  }
  whyChooseUsCards: WhyChooseUsCardQueryModel[]
}

export type HomeQueryModel = {
  hero: HeroQueryModel
  whyChooseUs: WhyChooseUsQueryModel
}
