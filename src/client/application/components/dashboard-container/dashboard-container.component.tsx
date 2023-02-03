import { Footer } from '../footer'
import { Header } from '../header'
import { SideBar } from '../sidebar'
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
