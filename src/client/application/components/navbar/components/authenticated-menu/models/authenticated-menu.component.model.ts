import { HeaderQueryModel } from '@/client/infra/graphql/shared/models'
import React from 'react'

export type AuthenticatedMenuModel = HeaderQueryModel & {
  children: React.ReactNode
}
