import { Header } from '../header'
import { SideBar } from '../sidebar'
import { DashboardContainerModel } from './models'

export function DashboardContainer({
  children,
  header,
}: DashboardContainerModel) {
  return (
    <>
      <Header {...header} />
      <SideBar>{children}</SideBar>
    </>
  )
}
