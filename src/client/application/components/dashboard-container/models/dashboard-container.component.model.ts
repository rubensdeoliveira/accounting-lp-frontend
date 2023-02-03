import { HeaderQueryModel } from '@/client/infra/graphql/shared/models'
import { ReactNode } from 'react'

export type DashboardContainerModel = {
  children: ReactNode
  header: HeaderQueryModel
}
