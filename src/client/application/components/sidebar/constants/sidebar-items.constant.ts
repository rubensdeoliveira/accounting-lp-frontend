import { HomeIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'

type SidebarItemType = {
  label: string
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
  path: string
}

export const sidebarMainItems: SidebarItemType[] = [
  { label: 'Dashboard', Icon: HomeIcon, path: '/area-do-cliente/dashboard' },
  { label: 'Empresas', Icon: HomeIcon, path: '/area-do-cliente/empresas' },
]

export const sidebarSecondaryItems: SidebarItemType[] = [
  {
    label: 'Usuários Habilitados',
    Icon: ArrowUturnRightIcon,
    path: '/area-do-cliente/usuarios-habilitados',
  },
]
