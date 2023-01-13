import { Category } from '@/infra/graphql/categories/models'

export type SidebarModel = {
  menuItems?: Category[]
  isHomePage?: boolean
}
