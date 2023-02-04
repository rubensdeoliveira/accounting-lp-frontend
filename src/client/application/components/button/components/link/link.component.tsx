import NextLink from 'next/link'
import React from 'react'

import { LinkModel } from './models'

export function Link({ children, link }: LinkModel) {
  if (link) {
    return <NextLink href={link}>{children}</NextLink>
  }

  return <>{children}</>
}
