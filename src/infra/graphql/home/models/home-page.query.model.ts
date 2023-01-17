type HeroQueryModel = {
  title: string
  description: string
  button: {
    label: string
    link: string
  }
}

type FooterQueryModel = {
  title1: string
  title2: string
  iconButtonLinks: {
    id: string
    iconType: string
    link: string
  }
  contactLinks: {
    id: string
    iconType: string
    text: string
    link: string
  }
  description: string
}

export type HomeQueryModel = {
  hero: HeroQueryModel
  footer: FooterQueryModel
}
