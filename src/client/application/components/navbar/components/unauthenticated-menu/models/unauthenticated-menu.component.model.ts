import { HeaderQueryModel } from '@/client/infra/graphql/shared/models'
import React from 'react'

export type UnauthenticatedMenuModel = HeaderQueryModel & {
  children: React.ReactNode
}
