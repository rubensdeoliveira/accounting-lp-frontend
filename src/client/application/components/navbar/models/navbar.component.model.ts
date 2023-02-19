import { HeaderQueryModel } from '@/client/infra/graphql/shared/models'
import React from 'react'

export type NavbarModel = HeaderQueryModel & {
  children?: React.ReactNode
}
