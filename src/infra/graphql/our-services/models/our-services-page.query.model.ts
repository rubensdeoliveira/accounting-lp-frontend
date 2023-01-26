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

export type OurServicesQueryModel = {
  whyChooseUs: WhyChooseUsQueryModel
}
