export type HeaderQueryModel = {
  logo: {
    url: string
  }
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

export type SharedQueryModel = {
  header: HeaderQueryModel
  footer: FooterQueryModel
}
