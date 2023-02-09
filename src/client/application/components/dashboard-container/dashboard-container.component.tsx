import { Footer, Header } from '@/client/application/sections'
import { SideBar } from '@/client/application/components'
import { DashboardContainerModel } from './models'

export function DashboardContainer({
  children,
  header,
  footer,
}: DashboardContainerModel) {
  return (
    <>
      <Header {...header} />
      <SideBar>{children}</SideBar>
      <Footer {...footer} />
    </>
  )
}
