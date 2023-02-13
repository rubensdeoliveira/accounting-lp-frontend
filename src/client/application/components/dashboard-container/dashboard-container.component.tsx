import { Footer } from '@/client/application/sections'
import { Navbar } from '../navbar'
import { DashboardContainerModel } from './models'

export function DashboardContainer({
  children,
  header,
  footer,
}: DashboardContainerModel) {
  return (
    <>
      <Navbar {...header}>{children}</Navbar>
      <Footer {...footer} />
    </>
  )
}
