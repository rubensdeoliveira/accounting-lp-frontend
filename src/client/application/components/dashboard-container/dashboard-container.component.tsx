import { Footer, Header } from '@/client/application/sections'
import { SideBar } from '@rubensdeoliveira-ui/react'
import { DashboardContainerModel } from './models'

export function DashboardContainer({
  children,
  header,
  footer,
}: DashboardContainerModel) {
  return (
    <>
      <Header {...header} />
      <SideBar sidebarMainItems={[]} sidebarSecondaryItems={[]} user={{}}>
        {children}
      </SideBar>
      <Footer {...footer} />
    </>
  )
}
